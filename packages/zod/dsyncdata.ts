import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteOrganizationSettings, OrganizationSettingsModel, CompleteDSyncTeamGroupMapping, DSyncTeamGroupMappingModel, CompleteAttributeToUser, AttributeToUserModel } from "./index"

export const _DSyncDataModel = z.object({
  id: z.number().int(),
  directoryId: z.string(),
  tenant: z.string(),
  organizationId: z.number().int().nullish(),
})

export interface CompleteDSyncData extends z.infer<typeof _DSyncDataModel> {
  org?: CompleteOrganizationSettings | null
  teamGroupMapping: CompleteDSyncTeamGroupMapping[]
  createdAttributeToUsers: CompleteAttributeToUser[]
  updatedAttributeToUsers: CompleteAttributeToUser[]
}

/**
 * DSyncDataModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const DSyncDataModel: z.ZodSchema<CompleteDSyncData> = z.lazy(() => _DSyncDataModel.extend({
  org: OrganizationSettingsModel.nullish(),
  teamGroupMapping: DSyncTeamGroupMappingModel.array(),
  createdAttributeToUsers: AttributeToUserModel.array(),
  updatedAttributeToUsers: AttributeToUserModel.array(),
}))
