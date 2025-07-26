import * as z from "zod"
import * as imports from "../zod-utils"
import { RRResetInterval, RRTimestampBasis, SMSLockState } from "@prisma/client"
import { CompleteMembership, MembershipModel, CompleteEventType, EventTypeModel, CompleteWorkflow, WorkflowModel, CompleteVerifiedNumber, VerifiedNumberModel, CompleteVerifiedEmail, VerifiedEmailModel, CompleteUser, UserModel, CompleteVerificationToken, VerificationTokenModel, CompleteWebhook, WebhookModel, CompleteApp_RoutingForms_Form, App_RoutingForms_FormModel, CompleteApiKey, ApiKeyModel, CompleteCredential, CredentialModel, CompleteAccessCode, AccessCodeModel, CompleteOrganizationSettings, OrganizationSettingsModel, CompleteInstantMeetingToken, InstantMeetingTokenModel, CompleteProfile, ProfileModel, CompleteDSyncTeamGroupMapping, DSyncTeamGroupMappingModel, CompletePlatformOAuthClient, PlatformOAuthClientModel, CompletePlatformBilling, PlatformBillingModel, CompleteWorkflowsOnTeams, WorkflowsOnTeamsModel, CompleteAttribute, AttributeModel, CompleteDelegationCredential, DelegationCredentialModel, CompleteDomainWideDelegation, DomainWideDelegationModel, CompleteRole, RoleModel, CompleteTeamFeatures, TeamFeaturesModel, CompleteInternalNotePreset, InternalNotePresetModel, CompleteCreditBalance, CreditBalanceModel, CompleteOrganizationOnboarding, OrganizationOnboardingModel, CompleteManagedOrganization, ManagedOrganizationModel, CompleteFilterSegment, FilterSegmentModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _TeamModel = z.object({
  id: z.number().int(),
  name: z.string().min(1),
  slug: z.string().min(1).nullish(),
  logoUrl: z.string().nullish(),
  calVideoLogo: z.string().nullish(),
  appLogo: z.string().nullish(),
  appIconLogo: z.string().nullish(),
  bio: z.string().nullish(),
  hideBranding: z.boolean(),
  hideTeamProfileLink: z.boolean(),
  isPrivate: z.boolean(),
  hideBookATeamMember: z.boolean(),
  createdAt: z.date(),
  metadata: imports.teamMetadataSchema,
  theme: z.string().nullish(),
  rrResetInterval: z.nativeEnum(RRResetInterval).nullish(),
  rrTimestampBasis: z.nativeEnum(RRTimestampBasis),
  brandColor: z.string().nullish(),
  darkBrandColor: z.string().nullish(),
  bannerUrl: z.string().nullish(),
  parentId: z.number().int().nullish(),
  timeFormat: z.number().int().nullish(),
  timeZone: z.string(),
  weekStart: z.string(),
  isOrganization: z.boolean(),
  pendingPayment: z.boolean(),
  isPlatform: z.boolean(),
  createdByOAuthClientId: z.string().nullish(),
  smsLockState: z.nativeEnum(SMSLockState),
  smsLockReviewedByAdmin: z.boolean(),
  bookingLimits: imports.intervalLimitsType,
  includeManagedEventsInLimits: z.boolean(),
})

export interface CompleteTeam extends z.infer<typeof _TeamModel> {
  members: CompleteMembership[]
  eventTypes: CompleteEventType[]
  workflows: CompleteWorkflow[]
  verifiedNumbers: CompleteVerifiedNumber[]
  verifiedEmails: CompleteVerifiedEmail[]
  parent?: CompleteTeam | null
  children: CompleteTeam[]
  orgUsers: CompleteUser[]
  inviteTokens: CompleteVerificationToken[]
  webhooks: CompleteWebhook[]
  routingForms: CompleteApp_RoutingForms_Form[]
  apiKeys: CompleteApiKey[]
  credentials: CompleteCredential[]
  accessCodes: CompleteAccessCode[]
  organizationSettings?: CompleteOrganizationSettings | null
  instantMeetingTokens: CompleteInstantMeetingToken[]
  orgProfiles: CompleteProfile[]
  dsyncTeamGroupMapping: CompleteDSyncTeamGroupMapping[]
  platformOAuthClient: CompletePlatformOAuthClient[]
  createdByOAuthClient?: CompletePlatformOAuthClient | null
  platformBilling?: CompletePlatformBilling | null
  activeOrgWorkflows: CompleteWorkflowsOnTeams[]
  attributes: CompleteAttribute[]
  delegationCredentials: CompleteDelegationCredential[]
  domainWideDelegations: CompleteDomainWideDelegation[]
  roles: CompleteRole[]
  features: CompleteTeamFeatures[]
  internalNotePresets: CompleteInternalNotePreset[]
  creditBalance?: CompleteCreditBalance | null
  organizationOnboarding?: CompleteOrganizationOnboarding | null
  managedOrganization?: CompleteManagedOrganization | null
  managedOrganizations: CompleteManagedOrganization[]
  filterSegments: CompleteFilterSegment[]
}

/**
 * TeamModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TeamModel: z.ZodSchema<CompleteTeam> = z.lazy(() => _TeamModel.extend({
  members: MembershipModel.array(),
  eventTypes: EventTypeModel.array(),
  workflows: WorkflowModel.array(),
  verifiedNumbers: VerifiedNumberModel.array(),
  verifiedEmails: VerifiedEmailModel.array(),
  parent: TeamModel.nullish(),
  children: TeamModel.array(),
  orgUsers: UserModel.array(),
  inviteTokens: VerificationTokenModel.array(),
  webhooks: WebhookModel.array(),
  routingForms: App_RoutingForms_FormModel.array(),
  apiKeys: ApiKeyModel.array(),
  credentials: CredentialModel.array(),
  accessCodes: AccessCodeModel.array(),
  organizationSettings: OrganizationSettingsModel.nullish(),
  instantMeetingTokens: InstantMeetingTokenModel.array(),
  orgProfiles: ProfileModel.array(),
  dsyncTeamGroupMapping: DSyncTeamGroupMappingModel.array(),
  platformOAuthClient: PlatformOAuthClientModel.array(),
  createdByOAuthClient: PlatformOAuthClientModel.nullish(),
  platformBilling: PlatformBillingModel.nullish(),
  activeOrgWorkflows: WorkflowsOnTeamsModel.array(),
  attributes: AttributeModel.array(),
  delegationCredentials: DelegationCredentialModel.array(),
  domainWideDelegations: DomainWideDelegationModel.array(),
  roles: RoleModel.array(),
  features: TeamFeaturesModel.array(),
  internalNotePresets: InternalNotePresetModel.array(),
  creditBalance: CreditBalanceModel.nullish(),
  organizationOnboarding: OrganizationOnboardingModel.nullish(),
  managedOrganization: ManagedOrganizationModel.nullish(),
  managedOrganizations: ManagedOrganizationModel.array(),
  filterSegments: FilterSegmentModel.array(),
}))
