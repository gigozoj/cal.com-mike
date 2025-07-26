import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteWebhook, WebhookModel, CompleteBooking, BookingModel } from "./index"

export const _WebhookScheduledTriggersModel = z.object({
  id: z.number().int(),
  jobName: z.string().nullish(),
  subscriberUrl: z.string(),
  payload: z.string(),
  startAfter: z.date(),
  retryCount: z.number().int(),
  createdAt: z.date().nullish(),
  appId: z.string().nullish(),
  webhookId: z.string().nullish(),
  bookingId: z.number().int().nullish(),
})

export interface CompleteWebhookScheduledTriggers extends z.infer<typeof _WebhookScheduledTriggersModel> {
  webhook?: CompleteWebhook | null
  booking?: CompleteBooking | null
}

/**
 * WebhookScheduledTriggersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WebhookScheduledTriggersModel: z.ZodSchema<CompleteWebhookScheduledTriggers> = z.lazy(() => _WebhookScheduledTriggersModel.extend({
  webhook: WebhookModel.nullish(),
  booking: BookingModel.nullish(),
}))
