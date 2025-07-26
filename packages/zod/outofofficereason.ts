import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteOutOfOfficeEntry, OutOfOfficeEntryModel } from "./index"

export const _OutOfOfficeReasonModel = z.object({
  id: z.number().int(),
  emoji: z.string(),
  reason: z.string(),
  enabled: z.boolean(),
  userId: z.number().int().nullish(),
})

export interface CompleteOutOfOfficeReason extends z.infer<typeof _OutOfOfficeReasonModel> {
  user?: CompleteUser | null
  entries: CompleteOutOfOfficeEntry[]
}

/**
 * OutOfOfficeReasonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const OutOfOfficeReasonModel: z.ZodSchema<CompleteOutOfOfficeReason> = z.lazy(() => _OutOfOfficeReasonModel.extend({
  user: UserModel.nullish(),
  entries: OutOfOfficeEntryModel.array(),
}))
