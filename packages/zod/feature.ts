import * as z from "zod"
import * as imports from "../zod-utils"
import { FeatureType } from "@prisma/client"
import { CompleteUserFeatures, UserFeaturesModel, CompleteTeamFeatures, TeamFeaturesModel } from "./index"

export const _FeatureModel = z.object({
  slug: z.string(),
  enabled: z.boolean(),
  description: z.string().nullish(),
  type: z.nativeEnum(FeatureType).nullish(),
  stale: z.boolean().nullish(),
  lastUsedAt: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedBy: z.number().int().nullish(),
})

export interface CompleteFeature extends z.infer<typeof _FeatureModel> {
  users: CompleteUserFeatures[]
  teams: CompleteTeamFeatures[]
}

/**
 * FeatureModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const FeatureModel: z.ZodSchema<CompleteFeature> = z.lazy(() => _FeatureModel.extend({
  users: UserFeaturesModel.array(),
  teams: TeamFeaturesModel.array(),
}))
