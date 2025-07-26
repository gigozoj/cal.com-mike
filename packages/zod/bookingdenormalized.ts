import * as z from "zod"
import * as imports from "../zod-utils"
import { BookingStatus } from "@prisma/client"

export const _BookingDenormalizedModel = z.object({
  id: z.number().int(),
  uid: z.string(),
  eventTypeId: z.number().int().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  startTime: z.date(),
  endTime: z.date(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  location: z.string().nullish(),
  paid: z.boolean(),
  status: z.nativeEnum(BookingStatus),
  rescheduled: z.boolean().nullish(),
  userId: z.number().int().nullish(),
  teamId: z.number().int().nullish(),
  eventLength: z.number().int().nullish(),
  eventParentId: z.number().int().nullish(),
  userEmail: z.string().nullish(),
  userName: z.string().nullish(),
  userUsername: z.string().nullish(),
  ratingFeedback: z.string().nullish(),
  rating: z.number().int().nullish(),
  noShowHost: z.boolean().nullish(),
  isTeamBooking: z.boolean(),
})
