import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteRole, RoleModel } from "./index"

export const _RolePermissionModel = z.object({
  id: z.string(),
  roleId: z.string(),
  resource: z.string(),
  action: z.string(),
  createdAt: z.date(),
})

export interface CompleteRolePermission extends z.infer<typeof _RolePermissionModel> {
  role: CompleteRole
}

/**
 * RolePermissionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RolePermissionModel: z.ZodSchema<CompleteRolePermission> = z.lazy(() => _RolePermissionModel.extend({
  role: RoleModel,
}))
