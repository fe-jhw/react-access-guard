import { expect, describe, test, beforeEach, afterEach, vi } from "vitest";
import { AccessMap } from "../lib/types";
import { render, screen } from "@testing-library/react";
import AccessProvider from "../lib/access-provider";
import AccessGuard from "../lib/access-guard";

describe("AccessGuard", () => {
  describe("Basic Access Control", () => {
    function TestTemplate() {
      return (
        <>
          <AccessGuard entityCode="test" access={["CREATE"]}>
            <p>CREATE</p>
          </AccessGuard>
          <AccessGuard entityCode="test" access={["READ"]}>
            <p>READ</p>
          </AccessGuard>
          <AccessGuard entityCode="test" access={["UPDATE"]}>
            <p>UPDATE</p>
          </AccessGuard>
          <AccessGuard
            entityCode="test"
            access={["DELETE"]}
            fallback={<p>fallback</p>}
          >
            <p>DELETE</p>
          </AccessGuard>
        </>
      );
    }

    function renderWithAccessProvider(accessMap: AccessMap) {
      return render(
        <AccessProvider accessMap={accessMap}>
          <TestTemplate />
        </AccessProvider>
      );
    }

    test("shows content when user has permission", () => {
      renderWithAccessProvider({ test: ["READ"] });
      expect(screen.getByText("READ")).toBeInTheDocument();
    });

    test("hides content when user lacks permission", () => {
      renderWithAccessProvider({ test: ["CREATE"] });
      expect(screen.queryByText("READ")).not.toBeInTheDocument();
    });

    test("shows fallback when user lacks permission", () => {
      renderWithAccessProvider({ test: ["CREATE"] });
      expect(screen.getByText("fallback")).toBeInTheDocument();
    });
  });

  describe("Multiple Access Rights", () => {
    test("shows content when user has all required permissions", () => {
      render(
        <AccessProvider accessMap={{ test: ["CREATE", "UPDATE"] }}>
          <AccessGuard entityCode="test" access={["CREATE", "UPDATE"]}>
            <p>content</p>
          </AccessGuard>
        </AccessProvider>
      );
      expect(screen.getByText("content")).toBeInTheDocument();
    });

    test("shows content when user has any of the required permissions", () => {
      render(
        <AccessProvider accessMap={{ test: ["UPDATE"] }}>
          <AccessGuard entityCode="test" access={["CREATE", "UPDATE"]}>
            <p>content</p>
          </AccessGuard>
        </AccessProvider>
      );
      expect(screen.getByText("content")).toBeInTheDocument();
    });
  });

  describe("Edge Cases", () => {
    test("handles non-existent entityCode gracefully", () => {
      render(
        <AccessProvider accessMap={{}}>
          <AccessGuard entityCode="nonexistent" access={["READ"]}>
            <p>content</p>
          </AccessGuard>
        </AccessProvider>
      );
      expect(screen.queryByText("content")).not.toBeInTheDocument();
    });

    test("handles empty access array", () => {
      render(
        <AccessProvider accessMap={{ test: ["READ"] }}>
          <AccessGuard entityCode="test" access={[]}>
            <p>content</p>
          </AccessGuard>
        </AccessProvider>
      );
      expect(screen.queryByText("content")).not.toBeInTheDocument();
    });

    test("handles duplicate access rights", () => {
      render(
        <AccessProvider accessMap={{ test: ["READ"] }}>
          <AccessGuard entityCode="test" access={["READ", "READ"]}>
            <p>content</p>
          </AccessGuard>
        </AccessProvider>
      );
      expect(screen.getByText("content")).toBeInTheDocument();
    });
  });

  describe("Error Cases", () => {
    const originalNodeEnv = process.env.NODE_ENV;

    beforeEach(() => {
      vi.spyOn(console, "error").mockImplementation(() => {});
    });

    afterEach(() => {
      process.env.NODE_ENV = originalNodeEnv;
      vi.restoreAllMocks();
    });

    test("throws error in development when used without Provider", () => {
      process.env.NODE_ENV = "development";

      expect(() => {
        render(
          <AccessGuard entityCode="test" access={["READ"]}>
            <p>content</p>
          </AccessGuard>
        );
      }).toThrow("[react-access-guard-error]");
    });

    test("fails silently in production when used without Provider", () => {
      process.env.NODE_ENV = "production";

      expect(() => {
        render(
          <AccessGuard entityCode="test" access={["READ"]}>
            <p>content</p>
          </AccessGuard>
        );
      }).not.toThrow();
    });
  });
});
