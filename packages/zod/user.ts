import * as z from "zod"
import * as imports from "../zod-utils"
import { IdentityProvider, UserPermissionRole, SMSLockState, CreationSource } from "@prisma/client"
import { CompleteUserPassword, UserPasswordModel, CompleteTravelSchedule, TravelScheduleModel, CompleteEventType, EventTypeModel, CompleteCredential, CredentialModel, CompleteMembership, MembershipModel, CompleteBooking, BookingModel, CompleteSchedule, ScheduleModel, CompleteSelectedCalendar, SelectedCalendarModel, CompleteAvailability, AvailabilityModel, CompleteWebhook, WebhookModel, CompleteDestinationCalendar, DestinationCalendarModel, CompleteImpersonations, ImpersonationsModel, CompleteApiKey, ApiKeyModel, CompleteAccount, AccountModel, CompleteSession, SessionModel, CompleteFeedback, FeedbackModel, CompleteWorkflow, WorkflowModel, CompleteApp_RoutingForms_Form, App_RoutingForms_FormModel, CompleteVerifiedNumber, VerifiedNumberModel, CompleteVerifiedEmail, VerifiedEmailModel, CompleteHost, HostModel, CompleteTeam, TeamModel, CompleteAccessCode, AccessCodeModel, CompleteOutOfOfficeEntry, OutOfOfficeEntryModel, CompletePlatformOAuthClient, PlatformOAuthClientModel, CompleteAccessToken, AccessTokenModel, CompleteRefreshToken, RefreshTokenModel, CompletePlatformAuthorizationToken, PlatformAuthorizationTokenModel, CompleteProfile, ProfileModel, CompleteSecondaryEmail, SecondaryEmailModel, CompleteOutOfOfficeReason, OutOfOfficeReasonModel, CompleteNotificationsSubscriptions, NotificationsSubscriptionsModel, CompleteUserFeatures, UserFeaturesModel, CompleteAttributeToUser, AttributeToUserModel, CompleteEventTypeTranslation, EventTypeTranslationModel, CompleteWatchlist, WatchlistModel, CompleteBookingInternalNote, BookingInternalNoteModel, CompleteOrganizationOnboarding, OrganizationOnboardingModel, CompleteFilterSegment, FilterSegmentModel, CompleteUserFilterSegmentPreference, UserFilterSegmentPreferenceModel, CompleteCreditBalance, CreditBalanceModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _UserModel = z.object({
  id: z.number().int(),
  username: z.string().nullish(),
  name: z.string().nullish(),
  email: imports.emailSchema,
  emailVerified: z.date().nullish(),
  bio: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  timeZone: z.string(),
  weekStart: z.string(),
  startTime: z.number().int(),
  endTime: z.number().int(),
  bufferTime: z.number().int(),
  hideBranding: z.boolean(),
  theme: z.string().nullish(),
  appTheme: z.string().nullish(),
  createdDate: z.date(),
  trialEndsAt: z.date().nullish(),
  lastActiveAt: z.date().nullish(),
  defaultScheduleId: z.number().int().nullish(),
  completedOnboarding: z.boolean(),
  locale: z.string().nullish(),
  timeFormat: z.number().int().nullish(),
  twoFactorSecret: z.string().nullish(),
  twoFactorEnabled: z.boolean(),
  backupCodes: z.string().nullish(),
  identityProvider: z.nativeEnum(IdentityProvider),
  identityProviderId: z.string().nullish(),
  invitedTo: z.number().int().nullish(),
  brandColor: z.string().nullish(),
  darkBrandColor: z.string().nullish(),
  allowDynamicBooking: z.boolean().nullish(),
  allowSEOIndexing: z.boolean().nullish(),
  receiveMonthlyDigestEmail: z.boolean().nullish(),
  metadata: imports.userMetadata,
  verified: z.boolean().nullish(),
  role: z.nativeEnum(UserPermissionRole),
  disableImpersonation: z.boolean(),
  organizationId: z.number().int().nullish(),
  locked: z.boolean(),
  movedToProfileId: z.number().int().nullish(),
  isPlatformManaged: z.boolean(),
  smsLockState: z.nativeEnum(SMSLockState),
  smsLockReviewedByAdmin: z.boolean(),
  referralLinkId: z.string().nullish(),
  creationSource: z.nativeEnum(CreationSource).nullish(),
  whitelistWorkflows: z.boolean(),
})

export interface CompleteUser extends z.infer<typeof _UserModel> {
  password?: CompleteUserPassword | null
  travelSchedules: CompleteTravelSchedule[]
  eventTypes: CompleteEventType[]
  credentials: CompleteCredential[]
  teams: CompleteMembership[]
  bookings: CompleteBooking[]
  schedules: CompleteSchedule[]
  selectedCalendars: CompleteSelectedCalendar[]
  availability: CompleteAvailability[]
  webhooks: CompleteWebhook[]
  destinationCalendar?: CompleteDestinationCalendar | null
  impersonatedUsers: CompleteImpersonations[]
  impersonatedBy: CompleteImpersonations[]
  apiKeys: CompleteApiKey[]
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
  Feedback: CompleteFeedback[]
  ownedEventTypes: CompleteEventType[]
  workflows: CompleteWorkflow[]
  routingForms: CompleteApp_RoutingForms_Form[]
  updatedRoutingForms: CompleteApp_RoutingForms_Form[]
  verifiedNumbers: CompleteVerifiedNumber[]
  verifiedEmails: CompleteVerifiedEmail[]
  hosts: CompleteHost[]
  organization?: CompleteTeam | null
  accessCodes: CompleteAccessCode[]
  bookingRedirects: CompleteOutOfOfficeEntry[]
  bookingRedirectsTo: CompleteOutOfOfficeEntry[]
  platformOAuthClients: CompletePlatformOAuthClient[]
  AccessToken: CompleteAccessToken[]
  RefreshToken: CompleteRefreshToken[]
  PlatformAuthorizationToken: CompletePlatformAuthorizationToken[]
  profiles: CompleteProfile[]
  movedToProfile?: CompleteProfile | null
  secondaryEmails: CompleteSecondaryEmail[]
  OutOfOfficeReasons: CompleteOutOfOfficeReason[]
  NotificationsSubscriptions: CompleteNotificationsSubscriptions[]
  features: CompleteUserFeatures[]
  reassignedBookings: CompleteBooking[]
  createdAttributeToUsers: CompleteAttributeToUser[]
  updatedAttributeToUsers: CompleteAttributeToUser[]
  createdTranslations: CompleteEventTypeTranslation[]
  updatedTranslations: CompleteEventTypeTranslation[]
  createdWatchlists: CompleteWatchlist[]
  updatedWatchlists: CompleteWatchlist[]
  BookingInternalNote: CompleteBookingInternalNote[]
  createdOrganizationOnboardings: CompleteOrganizationOnboarding[]
  filterSegments: CompleteFilterSegment[]
  filterSegmentPreferences: CompleteUserFilterSegmentPreference[]
  creditBalance?: CompleteCreditBalance | null
}

/**
 * UserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserModel: z.ZodSchema<CompleteUser> = z.lazy(() => _UserModel.extend({
  password: UserPasswordModel.nullish(),
  travelSchedules: TravelScheduleModel.array(),
  eventTypes: EventTypeModel.array(),
  credentials: CredentialModel.array(),
  teams: MembershipModel.array(),
  bookings: BookingModel.array(),
  schedules: ScheduleModel.array(),
  selectedCalendars: SelectedCalendarModel.array(),
  availability: AvailabilityModel.array(),
  webhooks: WebhookModel.array(),
  destinationCalendar: DestinationCalendarModel.nullish(),
  impersonatedUsers: ImpersonationsModel.array(),
  impersonatedBy: ImpersonationsModel.array(),
  apiKeys: ApiKeyModel.array(),
  accounts: AccountModel.array(),
  sessions: SessionModel.array(),
  Feedback: FeedbackModel.array(),
  ownedEventTypes: EventTypeModel.array(),
  workflows: WorkflowModel.array(),
  routingForms: App_RoutingForms_FormModel.array(),
  updatedRoutingForms: App_RoutingForms_FormModel.array(),
  verifiedNumbers: VerifiedNumberModel.array(),
  verifiedEmails: VerifiedEmailModel.array(),
  hosts: HostModel.array(),
  organization: TeamModel.nullish(),
  accessCodes: AccessCodeModel.array(),
  bookingRedirects: OutOfOfficeEntryModel.array(),
  bookingRedirectsTo: OutOfOfficeEntryModel.array(),
  platformOAuthClients: PlatformOAuthClientModel.array(),
  AccessToken: AccessTokenModel.array(),
  RefreshToken: RefreshTokenModel.array(),
  PlatformAuthorizationToken: PlatformAuthorizationTokenModel.array(),
  profiles: ProfileModel.array(),
  movedToProfile: ProfileModel.nullish(),
  secondaryEmails: SecondaryEmailModel.array(),
  OutOfOfficeReasons: OutOfOfficeReasonModel.array(),
  NotificationsSubscriptions: NotificationsSubscriptionsModel.array(),
  features: UserFeaturesModel.array(),
  reassignedBookings: BookingModel.array(),
  createdAttributeToUsers: AttributeToUserModel.array(),
  updatedAttributeToUsers: AttributeToUserModel.array(),
  createdTranslations: EventTypeTranslationModel.array(),
  updatedTranslations: EventTypeTranslationModel.array(),
  createdWatchlists: WatchlistModel.array(),
  updatedWatchlists: WatchlistModel.array(),
  BookingInternalNote: BookingInternalNoteModel.array(),
  createdOrganizationOnboardings: OrganizationOnboardingModel.array(),
  filterSegments: FilterSegmentModel.array(),
  filterSegmentPreferences: UserFilterSegmentPreferenceModel.array(),
  creditBalance: CreditBalanceModel.nullish(),
}))
