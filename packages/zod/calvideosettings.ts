import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteEventType, EventTypeModel } from "./index"

export const _CalVideoSettingsModel = z.object({
  eventTypeId: z.number().int(),
  disableRecordingForOrganizer: z.boolean(),
  disableRecordingForGuests: z.boolean(),
  enableAutomaticTranscription: z.boolean(),
  enableAutomaticRecordingForOrganizer: z.boolean(),
  redirectUrlOnExit: z.string().nullish(),
  disableTranscriptionForGuests: z.boolean(),
  disableTranscriptionForOrganizer: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteCalVideoSettings extends z.infer<typeof _CalVideoSettingsModel> {
  eventType: CompleteEventType
}

/**
 * CalVideoSettingsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const CalVideoSettingsModel: z.ZodSchema<CompleteCalVideoSettings> = z.lazy(() => _CalVideoSettingsModel.extend({
  eventType: EventTypeModel,
}))
