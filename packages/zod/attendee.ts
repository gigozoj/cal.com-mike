import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteBooking, BookingModel, CompleteBookingSeat, BookingSeatModel } from "./index"

export const _AttendeeModel = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string(),
  timeZone: z.string(),
  phoneNumber: z.string().nullish(),
  locale: z.string().nullish(),
  bookingId: z.number().int().nullish(),
  noShow: z.boolean().nullish(),
})

export interface CompleteAttendee extends z.infer<typeof _AttendeeModel> {
  booking?: CompleteBooking | null
  bookingSeat?: CompleteBookingSeat | null
}

/**
 * AttendeeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AttendeeModel: z.ZodSchema<CompleteAttendee> = z.lazy(() => _AttendeeModel.extend({
  booking: BookingModel.nullish(),
  bookingSeat: BookingSeatModel.nullish(),
}))
