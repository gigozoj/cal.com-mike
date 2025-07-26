import * as z from "zod"
import * as imports from "../zod-utils"
import { BookingStatus } from "@prisma/client"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _RoutingFormResponseModel = z.object({
  id: z.number().int(),
  response: jsonSchema,
  responseLowercase: jsonSchema,
  formId: z.string(),
  formName: z.string(),
  formTeamId: z.number().int().nullish(),
  formUserId: z.number().int().nullish(),
  bookingUid: z.string().nullish(),
  bookingStatus: z.nativeEnum(BookingStatus).nullish(),
  bookingStatusOrder: z.number().int().nullish(),
  bookingCreatedAt: z.date().nullish(),
  bookingAttendees: jsonSchema,
  bookingUserId: z.number().int().nullish(),
  bookingUserName: z.string().nullish(),
  bookingUserEmail: z.string().nullish(),
  bookingUserAvatarUrl: z.string().nullish(),
  bookingAssignmentReason: z.string().nullish(),
  bookingAssignmentReasonLowercase: z.string().nullish(),
  bookingStartTime: z.date().nullish(),
  bookingEndTime: z.date().nullish(),
  createdAt: z.date(),
  utm_source: z.string().nullish(),
  utm_medium: z.string().nullish(),
  utm_campaign: z.string().nullish(),
  utm_term: z.string().nullish(),
  utm_content: z.string().nullish(),
})
