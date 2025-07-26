import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel } from "./index"

export const _NotificationsSubscriptionsModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  subscription: z.string(),
})

export interface CompleteNotificationsSubscriptions extends z.infer<typeof _NotificationsSubscriptionsModel> {
  user: CompleteUser
}

/**
 * NotificationsSubscriptionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const NotificationsSubscriptionsModel: z.ZodSchema<CompleteNotificationsSubscriptions> = z.lazy(() => _NotificationsSubscriptionsModel.extend({
  user: UserModel,
}))
