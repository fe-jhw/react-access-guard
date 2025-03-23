import { expect, test } from "vitest";
import { AccessMap } from "../lib/types";
import { render, screen } from "@testing-library/react";
import AccessProvider from "../lib/access-provider";
import AccessGuard from "../lib/access-guard";

function TestTemplate() {
  return (
    <>
      <AccessGuard entityCode={"TEST"} access={["CREATE"]}>
        <p>CREATE</p>
      </AccessGuard>
      <AccessGuard entityCode={"TEST"} access={["READ"]}>
        <p>READ</p>
      </AccessGuard>
      <AccessGuard entityCode={"TEST"} access={["UPDATE"]}>
        <p>UPDATE</p>
      </AccessGuard>
      <AccessGuard
        entityCode={"TEST"}
        access={["DELETE"]}
        fallback={"fallback"}
      >
        <p>DELETE</p>
      </AccessGuard>
    </>
  );
}

function renderWithAccessProvider(accessMap: AccessMap) {
  render(
    <AccessProvider accessMap={accessMap}>
      <TestTemplate />
    </AccessProvider>
  );
}

test("When the user has permission, <p>READ</p> wrapped in AccessGuard is visible.", async () => {
  renderWithAccessProvider({ TEST: ["READ"] });
  const readParagraph = screen.getByText("READ");
  expect(readParagraph).toBeInTheDocument();
});

test("When the user does not have permission, <p>READ</p> wrapped in AccessGuard is not visible.", async () => {
  renderWithAccessProvider({ TEST: ["CREATE"] });
  const readParagraph = screen.queryByText("READ");
  expect(readParagraph).not.toBeInTheDocument();
});

test("When the user does not have permission, <p>fallback</p> provided as fallback in AccessGuard is visible.", async () => {
  renderWithAccessProvider({ TEST: ["CREATE"] });
  const fallbackParagraph = screen.queryByText("fallback");
  expect(fallbackParagraph).toBeInTheDocument();
});
