import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel, CompleteFeature, FeatureModel } from "./index"

export const _TeamFeaturesModel = z.object({
  teamId: z.number().int(),
  featureId: z.string(),
  assignedAt: z.date(),
  assignedBy: z.string(),
  updatedAt: z.date(),
})

export interface CompleteTeamFeatures extends z.infer<typeof _TeamFeaturesModel> {
  team: CompleteTeam
  feature: CompleteFeature
}

/**
 * TeamFeaturesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TeamFeaturesModel: z.ZodSchema<CompleteTeamFeatures> = z.lazy(() => _TeamFeaturesModel.extend({
  team: TeamModel,
  feature: FeatureModel,
}))
