import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteWorkspacePlatform, WorkspacePlatformModel, CompleteTeam, TeamModel, CompleteSelectedCalendar, SelectedCalendarModel, CompleteDestinationCalendar, DestinationCalendarModel, CompleteBookingReference, BookingReferenceModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _DomainWideDelegationModel = z.object({
  id: z.string(),
  workspacePlatformId: z.number().int(),
  serviceAccountKey: imports.serviceAccountKeySchema,
  enabled: z.boolean(),
  organizationId: z.number().int(),
  domain: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteDomainWideDelegation extends z.infer<typeof _DomainWideDelegationModel> {
  workspacePlatform: CompleteWorkspacePlatform
  organization: CompleteTeam
  selectedCalendars: CompleteSelectedCalendar[]
  destinationCalendar: CompleteDestinationCalendar[]
  bookingReferences: CompleteBookingReference[]
}

/**
 * DomainWideDelegationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const DomainWideDelegationModel: z.ZodSchema<CompleteDomainWideDelegation> = z.lazy(() => _DomainWideDelegationModel.extend({
  workspacePlatform: WorkspacePlatformModel,
  organization: TeamModel,
  selectedCalendars: SelectedCalendarModel.array(),
  destinationCalendar: DestinationCalendarModel.array(),
  bookingReferences: BookingReferenceModel.array(),
}))
