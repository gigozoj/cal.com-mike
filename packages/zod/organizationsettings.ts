import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel, CompleteDSyncData, DSyncDataModel } from "./index"

export const _OrganizationSettingsModel = z.object({
  id: z.number().int(),
  organizationId: z.number().int(),
  isOrganizationConfigured: z.boolean(),
  isOrganizationVerified: z.boolean(),
  orgAutoAcceptEmail: z.string(),
  lockEventTypeCreationForUsers: z.boolean(),
  adminGetsNoSlotsNotification: z.boolean(),
  isAdminReviewed: z.boolean(),
  isAdminAPIEnabled: z.boolean(),
  allowSEOIndexing: z.boolean(),
  orgProfileRedirectsToVerifiedDomain: z.boolean(),
  disablePhoneOnlySMSNotifications: z.boolean(),
})

export interface CompleteOrganizationSettings extends z.infer<typeof _OrganizationSettingsModel> {
  organization: CompleteTeam
  dSyncData?: CompleteDSyncData | null
}

/**
 * OrganizationSettingsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const OrganizationSettingsModel: z.ZodSchema<CompleteOrganizationSettings> = z.lazy(() => _OrganizationSettingsModel.extend({
  organization: TeamModel,
  dSyncData: DSyncDataModel.nullish(),
}))
