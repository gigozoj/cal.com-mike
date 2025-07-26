import * as z from "zod"
import * as imports from "../zod-utils"
import { AssignmentReasonEnum } from "@prisma/client"
import { CompleteBooking, BookingModel } from "./index"

export const _AssignmentReasonModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  bookingId: z.number().int(),
  reasonEnum: z.nativeEnum(AssignmentReasonEnum),
  reasonString: z.string(),
})

export interface CompleteAssignmentReason extends z.infer<typeof _AssignmentReasonModel> {
  booking: CompleteBooking
}

/**
 * AssignmentReasonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AssignmentReasonModel: z.ZodSchema<CompleteAssignmentReason> = z.lazy(() => _AssignmentReasonModel.extend({
  booking: BookingModel,
}))
