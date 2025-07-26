import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel, CompleteBookingInternalNote, BookingInternalNoteModel } from "./index"

export const _InternalNotePresetModel = z.object({
  id: z.number().int(),
  name: z.string(),
  cancellationReason: z.string().nullish(),
  teamId: z.number().int(),
  createdAt: z.date(),
})

export interface CompleteInternalNotePreset extends z.infer<typeof _InternalNotePresetModel> {
  team: CompleteTeam
  BookingInternalNote: CompleteBookingInternalNote[]
}

/**
 * InternalNotePresetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const InternalNotePresetModel: z.ZodSchema<CompleteInternalNotePreset> = z.lazy(() => _InternalNotePresetModel.extend({
  team: TeamModel,
  BookingInternalNote: BookingInternalNoteModel.array(),
}))
