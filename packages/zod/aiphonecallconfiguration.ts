import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteEventType, EventTypeModel } from "./index"

export const _AIPhoneCallConfigurationModel = z.object({
  id: z.number().int(),
  eventTypeId: z.number().int(),
  templateType: z.string(),
  schedulerName: z.string().nullish(),
  generalPrompt: z.string().nullish(),
  yourPhoneNumber: z.string(),
  numberToCall: z.string(),
  guestName: z.string().nullish(),
  guestEmail: z.string().nullish(),
  guestCompany: z.string().nullish(),
  enabled: z.boolean(),
  beginMessage: z.string().nullish(),
  llmId: z.string().nullish(),
})

export interface CompleteAIPhoneCallConfiguration extends z.infer<typeof _AIPhoneCallConfigurationModel> {
  eventType: CompleteEventType
}

/**
 * AIPhoneCallConfigurationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AIPhoneCallConfigurationModel: z.ZodSchema<CompleteAIPhoneCallConfiguration> = z.lazy(() => _AIPhoneCallConfigurationModel.extend({
  eventType: EventTypeModel,
}))
