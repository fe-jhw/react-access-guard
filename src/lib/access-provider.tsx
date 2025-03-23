import { ReactNode } from "react";
import { AccessMap } from "./types";
import { AccessContext } from "./access-context";

/**
 * Context Provider that enables the use of AccessGuard.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered within the provider.
 * @param {AccessMap} props.accessMap - A hash map containing access information.
 *
 * @returns {JSX.Element} The rendered AccessProvider component.
 */
function AccessProvider({
  children,
  accessMap,
}: {
  children: ReactNode;
  accessMap: AccessMap;
}) {
  return (
    <AccessContext.Provider value={accessMap}>
      {children}
    </AccessContext.Provider>
  );
}

export default AccessProvider;
