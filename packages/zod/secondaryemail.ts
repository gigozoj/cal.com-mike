import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteVerificationToken, VerificationTokenModel, CompleteEventType, EventTypeModel } from "./index"

export const _SecondaryEmailModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  email: z.string(),
  emailVerified: z.date().nullish(),
})

export interface CompleteSecondaryEmail extends z.infer<typeof _SecondaryEmailModel> {
  user: CompleteUser
  verificationTokens: CompleteVerificationToken[]
  eventTypes: CompleteEventType[]
}

/**
 * SecondaryEmailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const SecondaryEmailModel: z.ZodSchema<CompleteSecondaryEmail> = z.lazy(() => _SecondaryEmailModel.extend({
  user: UserModel,
  verificationTokens: VerificationTokenModel.array(),
  eventTypes: EventTypeModel.array(),
}))
