import { ReactNode } from "react";
import { Access } from "./types";
import useAccess from "./use-access";

/**
 * The AccessGuard component checks the user's access permissions and
 * renders a fallback component if the user does not have the required permissions.
 *
 * @param {Object} props - The props for the component
 * @param {string} props.entityCode - The entity code for which to check access permissions
 * @param {ReactNode} props.children - The child component to render if access is granted
 * @param {Access[]} props.access - An array of allowed access permissions
 * @param {ReactNode} [props.fallback] - (optional) The fallback component to render if access is denied
 * @returns {ReactNode} - Returns the child component or fallback component based on access permissions
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
  const userAccess = useAccess({ entityCode });
  const hasAccess =
    userAccess?.some((_userAccess) => access.includes(_userAccess)) ?? false;
  if (!hasAccess) return <>{fallback ?? null}</>;
  return <>{children}</>;
}

export default AccessGuard;
