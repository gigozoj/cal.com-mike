import * as z from "zod"
import * as imports from "../zod-utils"
import { EventTypeAutoTranslatedField } from "@prisma/client"
import { CompleteEventType, EventTypeModel, CompleteUser, UserModel } from "./index"

export const _EventTypeTranslationModel = z.object({
  uid: z.string(),
  eventTypeId: z.number().int(),
  field: z.nativeEnum(EventTypeAutoTranslatedField),
  sourceLocale: z.string(),
  targetLocale: z.string(),
  translatedText: z.string(),
  createdAt: z.date(),
  createdBy: z.number().int(),
  updatedAt: z.date(),
  updatedBy: z.number().int().nullish(),
})

export interface CompleteEventTypeTranslation extends z.infer<typeof _EventTypeTranslationModel> {
  eventType: CompleteEventType
  creator: CompleteUser
  updater?: CompleteUser | null
}

/**
 * EventTypeTranslationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const EventTypeTranslationModel: z.ZodSchema<CompleteEventTypeTranslation> = z.lazy(() => _EventTypeTranslationModel.extend({
  eventType: EventTypeModel,
  creator: UserModel,
  updater: UserModel.nullish(),
}))
