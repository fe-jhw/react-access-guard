import AccessGuard from "./lib/access-guard";
import AccessProvider from "./lib/access-provider";
import { AccessMap } from "./lib/types";

const dummyAccess: AccessMap = { TEST: ["CREATE", "READ", "UPDATE", "DELETE"] };

function App() {
  return (
    <AccessProvider accessMap={dummyAccess}>
      <AccessGuard entityCode={"TEST"} access={["CREATE"]}>
        CREATE
      </AccessGuard>
      <AccessGuard entityCode={"TEST"} access={["READ"]}>
        READ
      </AccessGuard>
      <AccessGuard entityCode={"TEST"} access={["UPDATE"]}>
        UPDATE
      </AccessGuard>
      <AccessGuard
        entityCode={"TEST"}
        access={["DELETE"]}
        fallback={"fallback"}
      >
        DELETE
      </AccessGuard>
    </AccessProvider>
  );
}

export default App;
