import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteInternalNotePreset, InternalNotePresetModel, CompleteBooking, BookingModel, CompleteUser, UserModel } from "./index"

export const _BookingInternalNoteModel = z.object({
  id: z.number().int(),
  notePresetId: z.number().int().nullish(),
  text: z.string().nullish(),
  bookingId: z.number().int(),
  createdById: z.number().int(),
  createdAt: z.date(),
})

export interface CompleteBookingInternalNote extends z.infer<typeof _BookingInternalNoteModel> {
  notePreset?: CompleteInternalNotePreset | null
  booking: CompleteBooking
  createdBy: CompleteUser
}

/**
 * BookingInternalNoteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BookingInternalNoteModel: z.ZodSchema<CompleteBookingInternalNote> = z.lazy(() => _BookingInternalNoteModel.extend({
  notePreset: InternalNotePresetModel.nullish(),
  booking: BookingModel,
  createdBy: UserModel,
}))
