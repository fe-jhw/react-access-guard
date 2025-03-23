import { useContext } from 'react'
import { AccessContext } from './access-context'

function useAccess({entityCode}: {entityCode: string}) {
  const accessMap = useContext(AccessContext)

  if (!accessMap && process.env.NODE_ENV !== "production") {
    throw new Error(
      "[react-access-guard-error]: `<AccessGuard />` must be wrapped in a <AccessProvider />"
    )
  }

  return accessMap?.[entityCode]
}

export default useAccess