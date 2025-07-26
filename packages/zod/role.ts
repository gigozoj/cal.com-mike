import * as z from "zod"
import * as imports from "../zod-utils"
import { RoleType } from "@prisma/client"
import { CompleteTeam, TeamModel, CompleteRolePermission, RolePermissionModel, CompleteMembership, MembershipModel } from "./index"

export const _RoleModel = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string().nullish(),
  description: z.string().nullish(),
  teamId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  type: z.nativeEnum(RoleType),
})

export interface CompleteRole extends z.infer<typeof _RoleModel> {
  team?: CompleteTeam | null
  permissions: CompleteRolePermission[]
  memberships: CompleteMembership[]
}

/**
 * RoleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RoleModel: z.ZodSchema<CompleteRole> = z.lazy(() => _RoleModel.extend({
  team: TeamModel.nullish(),
  permissions: RolePermissionModel.array(),
  memberships: MembershipModel.array(),
}))
