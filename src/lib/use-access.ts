import { useContext } from 'react'
import { AccessContext } from './access-context'

/**
 * Internal hook used by AccessGuard to get access rights for a specific entity.
 * Throws an error in development if used outside of AccessProvider.
 */
function useAccess({ entityCode }: { entityCode: string }) {
  const accessMap = useContext(AccessContext)

  if (!accessMap && process.env.NODE_ENV !== "production") {
    throw new Error(
      "[react-access-guard-error]: `<AccessGuard />` must be wrapped in a <AccessProvider />"
    )
  }

  return accessMap?.[entityCode]
}

export default useAccess