export type Access = string

export interface AccessMap {
  [entityCode: string]: Array<Access>
}