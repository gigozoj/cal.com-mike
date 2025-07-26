import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel } from "./index"

export const _TravelScheduleModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  timeZone: z.string(),
  startDate: z.date(),
  endDate: z.date().nullish(),
  prevTimeZone: z.string().nullish(),
})

export interface CompleteTravelSchedule extends z.infer<typeof _TravelScheduleModel> {
  user: CompleteUser
}

/**
 * TravelScheduleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TravelScheduleModel: z.ZodSchema<CompleteTravelSchedule> = z.lazy(() => _TravelScheduleModel.extend({
  user: UserModel,
}))
