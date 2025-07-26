import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel } from "./index"

export const _UserPasswordModel = z.object({
  hash: z.string(),
  userId: z.number().int(),
})

export interface CompleteUserPassword extends z.infer<typeof _UserPasswordModel> {
  user: CompleteUser
}

/**
 * UserPasswordModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserPasswordModel: z.ZodSchema<CompleteUserPassword> = z.lazy(() => _UserPasswordModel.extend({
  user: UserModel,
}))
