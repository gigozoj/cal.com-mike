import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteEventType, EventTypeModel, CompleteAvailability, AvailabilityModel, CompleteHost, HostModel } from "./index"

export const _ScheduleModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  name: z.string(),
  timeZone: z.string().nullish(),
})

export interface CompleteSchedule extends z.infer<typeof _ScheduleModel> {
  user: CompleteUser
  eventType: CompleteEventType[]
  instantMeetingEvents: CompleteEventType[]
  restrictionSchedule: CompleteEventType[]
  availability: CompleteAvailability[]
  Host: CompleteHost[]
}

/**
 * ScheduleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ScheduleModel: z.ZodSchema<CompleteSchedule> = z.lazy(() => _ScheduleModel.extend({
  user: UserModel,
  eventType: EventTypeModel.array(),
  instantMeetingEvents: EventTypeModel.array(),
  restrictionSchedule: EventTypeModel.array(),
  availability: AvailabilityModel.array(),
  Host: HostModel.array(),
}))
