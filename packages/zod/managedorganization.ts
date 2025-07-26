import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel } from "./index"

export const _ManagedOrganizationModel = z.object({
  managedOrganizationId: z.number().int(),
  managerOrganizationId: z.number().int(),
  createdAt: z.date(),
})

export interface CompleteManagedOrganization extends z.infer<typeof _ManagedOrganizationModel> {
  managedOrganization: CompleteTeam
  managerOrganization: CompleteTeam
}

/**
 * ManagedOrganizationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ManagedOrganizationModel: z.ZodSchema<CompleteManagedOrganization> = z.lazy(() => _ManagedOrganizationModel.extend({
  managedOrganization: TeamModel,
  managerOrganization: TeamModel,
}))
