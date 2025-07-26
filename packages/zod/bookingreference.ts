import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteBooking, BookingModel, CompleteCredential, CredentialModel, CompleteDelegationCredential, DelegationCredentialModel, CompleteDomainWideDelegation, DomainWideDelegationModel } from "./index"

export const _BookingReferenceModel = z.object({
  id: z.number().int(),
  type: z.string().min(1),
  uid: z.string().min(1),
  meetingId: z.string().nullish(),
  thirdPartyRecurringEventId: z.string().nullish(),
  meetingPassword: z.string().nullish(),
  meetingUrl: z.string().nullish(),
  bookingId: z.number().int().nullish(),
  externalCalendarId: z.string().nullish(),
  deleted: z.boolean().nullish(),
  credentialId: z.number().int().nullish(),
  delegationCredentialId: z.string().nullish(),
  domainWideDelegationCredentialId: z.string().nullish(),
})

export interface CompleteBookingReference extends z.infer<typeof _BookingReferenceModel> {
  booking?: CompleteBooking | null
  credential?: CompleteCredential | null
  delegationCredential?: CompleteDelegationCredential | null
  domainWideDelegation?: CompleteDomainWideDelegation | null
}

/**
 * BookingReferenceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BookingReferenceModel: z.ZodSchema<CompleteBookingReference> = z.lazy(() => _BookingReferenceModel.extend({
  booking: BookingModel.nullish(),
  credential: CredentialModel.nullish(),
  delegationCredential: DelegationCredentialModel.nullish(),
  domainWideDelegation: DomainWideDelegationModel.nullish(),
}))
