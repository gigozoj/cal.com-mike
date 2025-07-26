import * as z from "zod"
import * as imports from "../zod-utils"
import { BookingStatus } from "@prisma/client"
import { CompleteBooking, BookingModel, CompleteApp_RoutingForms_FormResponse, App_RoutingForms_FormResponseModel, CompleteRoutingFormResponseField, RoutingFormResponseFieldModel } from "./index"

export const _RoutingFormResponseDenormalizedModel = z.object({
  id: z.number().int(),
  uuid: z.string().nullish(),
  formId: z.string(),
  formName: z.string(),
  formTeamId: z.number().int().nullish(),
  formUserId: z.number().int(),
  bookingUid: z.string().nullish(),
  bookingId: z.number().int().nullish(),
  bookingStatus: z.nativeEnum(BookingStatus).nullish(),
  bookingStatusOrder: z.number().int().nullish(),
  bookingCreatedAt: z.date().nullish(),
  bookingStartTime: z.date().nullish(),
  bookingEndTime: z.date().nullish(),
  bookingUserId: z.number().int().nullish(),
  bookingUserName: z.string().nullish(),
  bookingUserEmail: z.string().nullish(),
  bookingUserAvatarUrl: z.string().nullish(),
  bookingAssignmentReason: z.string().nullish(),
  eventTypeId: z.number().int().nullish(),
  eventTypeParentId: z.number().int().nullish(),
  eventTypeSchedulingType: z.string().nullish(),
  createdAt: z.date(),
  utm_source: z.string().nullish(),
  utm_medium: z.string().nullish(),
  utm_campaign: z.string().nullish(),
  utm_term: z.string().nullish(),
  utm_content: z.string().nullish(),
})

export interface CompleteRoutingFormResponseDenormalized extends z.infer<typeof _RoutingFormResponseDenormalizedModel> {
  booking?: CompleteBooking | null
  response: CompleteApp_RoutingForms_FormResponse
  fields: CompleteRoutingFormResponseField[]
}

/**
 * RoutingFormResponseDenormalizedModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RoutingFormResponseDenormalizedModel: z.ZodSchema<CompleteRoutingFormResponseDenormalized> = z.lazy(() => _RoutingFormResponseDenormalizedModel.extend({
  booking: BookingModel.nullish(),
  response: App_RoutingForms_FormResponseModel,
  fields: RoutingFormResponseFieldModel.array(),
}))
