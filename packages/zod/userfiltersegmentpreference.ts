import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteFilterSegment, FilterSegmentModel } from "./index"

export const _UserFilterSegmentPreferenceModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  tableIdentifier: z.string(),
  segmentId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUserFilterSegmentPreference extends z.infer<typeof _UserFilterSegmentPreferenceModel> {
  user: CompleteUser
  segment: CompleteFilterSegment
}

/**
 * UserFilterSegmentPreferenceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserFilterSegmentPreferenceModel: z.ZodSchema<CompleteUserFilterSegmentPreference> = z.lazy(() => _UserFilterSegmentPreferenceModel.extend({
  user: UserModel,
  segment: FilterSegmentModel,
}))
