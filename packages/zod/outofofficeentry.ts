import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteOutOfOfficeReason, OutOfOfficeReasonModel } from "./index"

export const _OutOfOfficeEntryModel = z.object({
  id: z.number().int(),
  uuid: z.string(),
  start: z.date(),
  end: z.date(),
  notes: z.string().nullish(),
  userId: z.number().int(),
  toUserId: z.number().int().nullish(),
  reasonId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteOutOfOfficeEntry extends z.infer<typeof _OutOfOfficeEntryModel> {
  user: CompleteUser
  toUser?: CompleteUser | null
  reason?: CompleteOutOfOfficeReason | null
}

/**
 * OutOfOfficeEntryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const OutOfOfficeEntryModel: z.ZodSchema<CompleteOutOfOfficeEntry> = z.lazy(() => _OutOfOfficeEntryModel.extend({
  user: UserModel,
  toUser: UserModel.nullish(),
  reason: OutOfOfficeReasonModel.nullish(),
}))
