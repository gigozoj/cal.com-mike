import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteEventType, EventTypeModel, CompleteSchedule, ScheduleModel } from "./index"

export const _HostModel = z.object({
  userId: z.number().int(),
  eventTypeId: z.number().int(),
  isFixed: z.boolean(),
  priority: z.number().int().nullish(),
  weight: z.number().int().nullish(),
  weightAdjustment: z.number().int().nullish(),
  scheduleId: z.number().int().nullish(),
  createdAt: z.date(),
})

export interface CompleteHost extends z.infer<typeof _HostModel> {
  user: CompleteUser
  eventType: CompleteEventType
  schedule?: CompleteSchedule | null
}

/**
 * HostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const HostModel: z.ZodSchema<CompleteHost> = z.lazy(() => _HostModel.extend({
  user: UserModel,
  eventType: EventTypeModel,
  schedule: ScheduleModel.nullish(),
}))
