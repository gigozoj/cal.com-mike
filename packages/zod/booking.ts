import * as z from "zod"
import * as imports from "../zod-utils"
import { BookingStatus, CreationSource } from "@prisma/client"
import { CompleteUser, UserModel, CompleteBookingReference, BookingReferenceModel, CompleteEventType, EventTypeModel, CompleteAttendee, AttendeeModel, CompletePayment, PaymentModel, CompleteDestinationCalendar, DestinationCalendarModel, CompleteWorkflowReminder, WorkflowReminderModel, CompleteBookingSeat, BookingSeatModel, CompleteInstantMeetingToken, InstantMeetingTokenModel, CompleteWebhookScheduledTriggers, WebhookScheduledTriggersModel, CompleteApp_RoutingForms_FormResponse, App_RoutingForms_FormResponseModel, CompleteAssignmentReason, AssignmentReasonModel, CompleteBookingInternalNote, BookingInternalNoteModel, CompleteTracking, TrackingModel, CompleteRoutingFormResponseDenormalized, RoutingFormResponseDenormalizedModel, CompleteCreditExpenseLog, CreditExpenseLogModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _BookingModel = z.object({
  id: z.number().int(),
  uid: z.string(),
  idempotencyKey: z.string().nullish(),
  userId: z.number().int().nullish(),
  userPrimaryEmail: imports.emailSchema.nullish(),
  eventTypeId: z.number().int().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  customInputs: jsonSchema,
  responses: imports.bookingResponses,
  startTime: z.date(),
  endTime: z.date(),
  location: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  status: z.nativeEnum(BookingStatus),
  paid: z.boolean(),
  destinationCalendarId: z.number().int().nullish(),
  cancellationReason: z.string().nullish(),
  rejectionReason: z.string().nullish(),
  reassignReason: z.string().nullish(),
  reassignById: z.number().int().nullish(),
  dynamicEventSlugRef: z.string().nullish(),
  dynamicGroupSlugRef: z.string().nullish(),
  rescheduled: z.boolean().nullish(),
  fromReschedule: z.string().nullish(),
  recurringEventId: z.string().nullish(),
  smsReminderNumber: z.string().nullish(),
  scheduledJobs: z.string().array(),
  metadata: imports.bookingMetadataSchema,
  isRecorded: z.boolean(),
  iCalUID: z.string().nullish(),
  iCalSequence: z.number().int(),
  rating: z.number().int().nullish(),
  ratingFeedback: z.string().nullish(),
  noShowHost: z.boolean().nullish(),
  oneTimePassword: z.string().nullish(),
  cancelledBy: z.string().email().nullish(),
  rescheduledBy: z.string().email().nullish(),
  creationSource: z.nativeEnum(CreationSource).nullish(),
})

export interface CompleteBooking extends z.infer<typeof _BookingModel> {
  user?: CompleteUser | null
  references: CompleteBookingReference[]
  eventType?: CompleteEventType | null
  attendees: CompleteAttendee[]
  payment: CompletePayment[]
  destinationCalendar?: CompleteDestinationCalendar | null
  reassignBy?: CompleteUser | null
  workflowReminders: CompleteWorkflowReminder[]
  seatsReferences: CompleteBookingSeat[]
  instantMeetingToken?: CompleteInstantMeetingToken | null
  scheduledTriggers: CompleteWebhookScheduledTriggers[]
  routedFromRoutingFormReponse?: CompleteApp_RoutingForms_FormResponse | null
  assignmentReason: CompleteAssignmentReason[]
  internalNote: CompleteBookingInternalNote[]
  tracking?: CompleteTracking | null
  routingFormResponses: CompleteRoutingFormResponseDenormalized[]
  expenseLogs: CompleteCreditExpenseLog[]
}

/**
 * BookingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BookingModel: z.ZodSchema<CompleteBooking> = z.lazy(() => _BookingModel.extend({
  user: UserModel.nullish(),
  references: BookingReferenceModel.array(),
  eventType: EventTypeModel.nullish(),
  attendees: AttendeeModel.array(),
  payment: PaymentModel.array(),
  destinationCalendar: DestinationCalendarModel.nullish(),
  reassignBy: UserModel.nullish(),
  workflowReminders: WorkflowReminderModel.array(),
  seatsReferences: BookingSeatModel.array(),
  instantMeetingToken: InstantMeetingTokenModel.nullish(),
  scheduledTriggers: WebhookScheduledTriggersModel.array(),
  routedFromRoutingFormReponse: App_RoutingForms_FormResponseModel.nullish(),
  assignmentReason: AssignmentReasonModel.array(),
  internalNote: BookingInternalNoteModel.array(),
  tracking: TrackingModel.nullish(),
  routingFormResponses: RoutingFormResponseDenormalizedModel.array(),
  expenseLogs: CreditExpenseLogModel.array(),
}))
