import { ReactNode } from "react";
import { AccessMap } from "./types";
import { AccessContext } from "./access-context";

/**
 * Context Provider that enables access control in the application.
 * Used in conjunction with AccessGuard to protect components based on user permissions.
 *
 * The AccessGuard components within this provider will check permissions using the following rule:
 * - A user needs ANY of the specified permissions to access the protected component
 *
 * @param props - Component properties
 * @param props.children - Child components that will have access to the access control system
 * @param props.accessMap - Map of entity codes to their allowed access rights
 *
 * @example
 * ```tsx
 * // Basic usage
 * const accessMap = {
 *   users: ['CREATE', 'READ', 'UPDATE'],
 *   posts: ['READ', 'COMMENT']
 * };
 *
 * function App() {
 *   return (
 *     <AccessProvider accessMap={accessMap}>
 *       <UserManagement />
 *       <PostList />
 *     </AccessProvider>
 *   );
 * }
 * ```
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
