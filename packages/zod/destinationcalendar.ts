import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteBooking, BookingModel, CompleteEventType, EventTypeModel, CompleteCredential, CredentialModel, CompleteDelegationCredential, DelegationCredentialModel, CompleteDomainWideDelegation, DomainWideDelegationModel } from "./index"

export const _DestinationCalendarModel = z.object({
  id: z.number().int(),
  integration: z.string(),
  externalId: z.string(),
  primaryEmail: imports.emailSchema.nullish(),
  userId: z.number().int().nullish(),
  eventTypeId: z.number().int().nullish(),
  credentialId: z.number().int().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  delegationCredentialId: z.string().nullish(),
  domainWideDelegationCredentialId: z.string().nullish(),
})

export interface CompleteDestinationCalendar extends z.infer<typeof _DestinationCalendarModel> {
  user?: CompleteUser | null
  booking: CompleteBooking[]
  eventType?: CompleteEventType | null
  credential?: CompleteCredential | null
  delegationCredential?: CompleteDelegationCredential | null
  domainWideDelegation?: CompleteDomainWideDelegation | null
}

/**
 * DestinationCalendarModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const DestinationCalendarModel: z.ZodSchema<CompleteDestinationCalendar> = z.lazy(() => _DestinationCalendarModel.extend({
  user: UserModel.nullish(),
  booking: BookingModel.array(),
  eventType: EventTypeModel.nullish(),
  credential: CredentialModel.nullish(),
  delegationCredential: DelegationCredentialModel.nullish(),
  domainWideDelegation: DomainWideDelegationModel.nullish(),
}))
