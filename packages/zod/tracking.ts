import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteBooking, BookingModel } from "./index"

export const _TrackingModel = z.object({
  id: z.number().int(),
  bookingId: z.number().int(),
  utm_source: z.string().nullish(),
  utm_medium: z.string().nullish(),
  utm_campaign: z.string().nullish(),
  utm_term: z.string().nullish(),
  utm_content: z.string().nullish(),
})

export interface CompleteTracking extends z.infer<typeof _TrackingModel> {
  booking: CompleteBooking
}

/**
 * TrackingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TrackingModel: z.ZodSchema<CompleteTracking> = z.lazy(() => _TrackingModel.extend({
  booking: BookingModel,
}))
