import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel, CompleteDSyncData, DSyncDataModel } from "./index"

export const _DSyncTeamGroupMappingModel = z.object({
  id: z.number().int(),
  organizationId: z.number().int(),
  teamId: z.number().int(),
  directoryId: z.string(),
  groupName: z.string(),
})

export interface CompleteDSyncTeamGroupMapping extends z.infer<typeof _DSyncTeamGroupMappingModel> {
  team: CompleteTeam
  directory: CompleteDSyncData
}

/**
 * DSyncTeamGroupMappingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const DSyncTeamGroupMappingModel: z.ZodSchema<CompleteDSyncTeamGroupMapping> = z.lazy(() => _DSyncTeamGroupMappingModel.extend({
  team: TeamModel,
  directory: DSyncDataModel,
}))
