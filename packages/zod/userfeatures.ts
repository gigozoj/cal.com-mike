import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteFeature, FeatureModel } from "./index"

export const _UserFeaturesModel = z.object({
  userId: z.number().int(),
  featureId: z.string(),
  assignedAt: z.date(),
  assignedBy: z.string(),
  updatedAt: z.date(),
})

export interface CompleteUserFeatures extends z.infer<typeof _UserFeaturesModel> {
  user: CompleteUser
  feature: CompleteFeature
}

/**
 * UserFeaturesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserFeaturesModel: z.ZodSchema<CompleteUserFeatures> = z.lazy(() => _UserFeaturesModel.extend({
  user: UserModel,
  feature: FeatureModel,
}))
