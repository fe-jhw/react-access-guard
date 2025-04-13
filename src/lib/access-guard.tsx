import { ReactNode, useMemo } from "react";
import { Access } from "./types";
import useAccess from "./use-access";

/**
 * The AccessGuard component checks the user's access permissions and
 * renders a fallback component if the user does not have the required permissions.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <AccessGuard
 *   entityCode="users"
 *   access={["CREATE", "UPDATE"]}
 *   fallback={<div>Access Denied</div>}
 * >
 *   <UserForm />
 * </AccessGuard>
 *
 * // Custom access example
 * <AccessGuard
 *   entityCode="posts"
 *   access={["PUBLISH", "FEATURE"]}
 * >
 *   <PostManagement />
 * </AccessGuard>
 * ```
 *
 * @param props - Component properties
 * @param props.entityCode - Entity code to check access against
 * @param props.children - Component to render when access is granted
 * @param props.access - List of access rights required to view the component (e.g., ["CREATE", "READ", "APPROVE"])
 * @param props.fallback - (optional) Component to render when access is denied
 * @returns Children component if access is granted, fallback component otherwise
 */
function AccessGuard({
  entityCode,
  children,
  access,
  fallback,
}: {
  entityCode: string;
  children: ReactNode;
  access: Access[];
  fallback?: ReactNode;
}) {
  const grantedAccess = useAccess({ entityCode });

  const hasRequiredAccess = useMemo(
    () => grantedAccess?.some((granted) => access.includes(granted)) ?? false,
    [grantedAccess, access]
  );

  if (!hasRequiredAccess) return <>{fallback ?? null}</>;
  return <>{children}</>;
}

export default AccessGuard;
