import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel, CompleteBooking, BookingModel } from "./index"

export const _InstantMeetingTokenModel = z.object({
  id: z.number().int(),
  token: z.string(),
  expires: z.date(),
  teamId: z.number().int(),
  bookingId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteInstantMeetingToken extends z.infer<typeof _InstantMeetingTokenModel> {
  team: CompleteTeam
  booking?: CompleteBooking | null
}

/**
 * InstantMeetingTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const InstantMeetingTokenModel: z.ZodSchema<CompleteInstantMeetingToken> = z.lazy(() => _InstantMeetingTokenModel.extend({
  team: TeamModel,
  booking: BookingModel.nullish(),
}))
