/**
 * String type representing access permissions.
 * Examples:
 * - 'CREATE' - Permission to create
 * - 'READ' - Permission to read
 * - 'UPDATE' - Permission to update
 * - 'DELETE' - Permission to delete
 * - 'MANAGE' - Admin permission
 * - 'APPROVE' - Permission to approve
 * - 'REJECT' - Permission to reject
 * You can freely define any string as a permission.
 */
export type Access = string

/**
 * Interface defining the access permission map for entities.
 * Specifies an array of permission strings for each entity code.
 * 
 * @example
 * ```typescript
 * const accessMap: AccessMap = {
 *   users: ['CREATE', 'READ', 'UPDATE'],
 *   posts: ['READ', 'COMMENT'],
 *   admin: ['MANAGE']
 * };
 * ```
 */
export interface AccessMap {
  [entityCode: string]: Array<Access>
}