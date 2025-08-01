// This file was generated by a custom prisma generator, do not edit manually.
export const SchedulingType = {
  ROUND_ROBIN: "ROUND_ROBIN",
  COLLECTIVE: "COLLECTIVE",
  MANAGED: "MANAGED",
} as const;

export type SchedulingType = (typeof SchedulingType)[keyof typeof SchedulingType];

export const PeriodType = {
  UNLIMITED: "UNLIMITED",
  ROLLING: "ROLLING",
  ROLLING_WINDOW: "ROLLING_WINDOW",
  RANGE: "RANGE",
} as const;

export type PeriodType = (typeof PeriodType)[keyof typeof PeriodType];

export const CreationSource = {
  API_V1: "API_V1",
  API_V2: "API_V2",
  WEBAPP: "WEBAPP",
} as const;

export type CreationSource = (typeof CreationSource)[keyof typeof CreationSource];

export const IdentityProvider = {
  CAL: "CAL",
  GOOGLE: "GOOGLE",
  SAML: "SAML",
} as const;

export type IdentityProvider = (typeof IdentityProvider)[keyof typeof IdentityProvider];

export const UserPermissionRole = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type UserPermissionRole = (typeof UserPermissionRole)[keyof typeof UserPermissionRole];

export const CreditType = {
  MONTHLY: "MONTHLY",
  ADDITIONAL: "ADDITIONAL",
} as const;

export type CreditType = (typeof CreditType)[keyof typeof CreditType];

export const MembershipRole = {
  MEMBER: "MEMBER",
  ADMIN: "ADMIN",
  OWNER: "OWNER",
} as const;

export type MembershipRole = (typeof MembershipRole)[keyof typeof MembershipRole];

export const BookingStatus = {
  CANCELLED: "CANCELLED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  PENDING: "PENDING",
  AWAITING_HOST: "AWAITING_HOST",
} as const;

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];

export const EventTypeCustomInputType = {
  TEXT: "TEXT",
  TEXTLONG: "TEXTLONG",
  NUMBER: "NUMBER",
  BOOL: "BOOL",
  RADIO: "RADIO",
  PHONE: "PHONE",
} as const;

export type EventTypeCustomInputType = (typeof EventTypeCustomInputType)[keyof typeof EventTypeCustomInputType];

export const ReminderType = {
  PENDING_BOOKING_CONFIRMATION: "PENDING_BOOKING_CONFIRMATION",
} as const;

export type ReminderType = (typeof ReminderType)[keyof typeof ReminderType];

export const PaymentOption = {
  ON_BOOKING: "ON_BOOKING",
  HOLD: "HOLD",
} as const;

export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

export const WebhookTriggerEvents = {
  BOOKING_CREATED: "BOOKING_CREATED",
  BOOKING_PAYMENT_INITIATED: "BOOKING_PAYMENT_INITIATED",
  BOOKING_PAID: "BOOKING_PAID",
  BOOKING_RESCHEDULED: "BOOKING_RESCHEDULED",
  BOOKING_REQUESTED: "BOOKING_REQUESTED",
  BOOKING_CANCELLED: "BOOKING_CANCELLED",
  BOOKING_REJECTED: "BOOKING_REJECTED",
  BOOKING_NO_SHOW_UPDATED: "BOOKING_NO_SHOW_UPDATED",
  FORM_SUBMITTED: "FORM_SUBMITTED",
  MEETING_ENDED: "MEETING_ENDED",
  MEETING_STARTED: "MEETING_STARTED",
  RECORDING_READY: "RECORDING_READY",
  INSTANT_MEETING: "INSTANT_MEETING",
  RECORDING_TRANSCRIPTION_GENERATED: "RECORDING_TRANSCRIPTION_GENERATED",
  OOO_CREATED: "OOO_CREATED",
  AFTER_HOSTS_CAL_VIDEO_NO_SHOW: "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
  AFTER_GUESTS_CAL_VIDEO_NO_SHOW: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
  FORM_SUBMITTED_NO_EVENT: "FORM_SUBMITTED_NO_EVENT",
} as const;

export type WebhookTriggerEvents = (typeof WebhookTriggerEvents)[keyof typeof WebhookTriggerEvents];

export const AppCategories = {
  calendar: "calendar",
  messaging: "messaging",
  other: "other",
  payment: "payment",
  video: "video",
  web3: "web3",
  automation: "automation",
  analytics: "analytics",
  conferencing: "conferencing",
  crm: "crm",
} as const;

export type AppCategories = (typeof AppCategories)[keyof typeof AppCategories];

export const WorkflowTriggerEvents = {
  BEFORE_EVENT: "BEFORE_EVENT",
  EVENT_CANCELLED: "EVENT_CANCELLED",
  NEW_EVENT: "NEW_EVENT",
  AFTER_EVENT: "AFTER_EVENT",
  RESCHEDULE_EVENT: "RESCHEDULE_EVENT",
  AFTER_HOSTS_CAL_VIDEO_NO_SHOW: "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
  AFTER_GUESTS_CAL_VIDEO_NO_SHOW: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
} as const;

export type WorkflowTriggerEvents = (typeof WorkflowTriggerEvents)[keyof typeof WorkflowTriggerEvents];

export const WorkflowActions = {
  EMAIL_HOST: "EMAIL_HOST",
  EMAIL_ATTENDEE: "EMAIL_ATTENDEE",
  SMS_ATTENDEE: "SMS_ATTENDEE",
  SMS_NUMBER: "SMS_NUMBER",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  WHATSAPP_ATTENDEE: "WHATSAPP_ATTENDEE",
  WHATSAPP_NUMBER: "WHATSAPP_NUMBER",
} as const;

export type WorkflowActions = (typeof WorkflowActions)[keyof typeof WorkflowActions];

export const TimeUnit = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
} as const;

export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];

export const WorkflowTemplates = {
  REMINDER: "REMINDER",
  CUSTOM: "CUSTOM",
  CANCELLED: "CANCELLED",
  RESCHEDULED: "RESCHEDULED",
  COMPLETED: "COMPLETED",
  RATING: "RATING",
} as const;

export type WorkflowTemplates = (typeof WorkflowTemplates)[keyof typeof WorkflowTemplates];

export const WorkflowMethods = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  WHATSAPP: "WHATSAPP",
} as const;

export type WorkflowMethods = (typeof WorkflowMethods)[keyof typeof WorkflowMethods];

export const FeatureType = {
  RELEASE: "RELEASE",
  EXPERIMENT: "EXPERIMENT",
  OPERATIONAL: "OPERATIONAL",
  KILL_SWITCH: "KILL_SWITCH",
  PERMISSION: "PERMISSION",
} as const;

export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

export const RRResetInterval = {
  MONTH: "MONTH",
  DAY: "DAY",
} as const;

export type RRResetInterval = (typeof RRResetInterval)[keyof typeof RRResetInterval];

export const RRTimestampBasis = {
  CREATED_AT: "CREATED_AT",
  START_TIME: "START_TIME",
} as const;

export type RRTimestampBasis = (typeof RRTimestampBasis)[keyof typeof RRTimestampBasis];

export const AccessScope = {
  READ_BOOKING: "READ_BOOKING",
  READ_PROFILE: "READ_PROFILE",
} as const;

export type AccessScope = (typeof AccessScope)[keyof typeof AccessScope];

export const RedirectType = {
  UserEventType: "UserEventType",
  TeamEventType: "TeamEventType",
  User: "User",
  Team: "Team",
} as const;

export type RedirectType = (typeof RedirectType)[keyof typeof RedirectType];

export const SMSLockState = {
  LOCKED: "LOCKED",
  UNLOCKED: "UNLOCKED",
  REVIEW_NEEDED: "REVIEW_NEEDED",
} as const;

export type SMSLockState = (typeof SMSLockState)[keyof typeof SMSLockState];

export const AttributeType = {
  TEXT: "TEXT",
  NUMBER: "NUMBER",
  SINGLE_SELECT: "SINGLE_SELECT",
  MULTI_SELECT: "MULTI_SELECT",
} as const;

export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

export const AssignmentReasonEnum = {
  ROUTING_FORM_ROUTING: "ROUTING_FORM_ROUTING",
  ROUTING_FORM_ROUTING_FALLBACK: "ROUTING_FORM_ROUTING_FALLBACK",
  REASSIGNED: "REASSIGNED",
  RR_REASSIGNED: "RR_REASSIGNED",
  REROUTED: "REROUTED",
  SALESFORCE_ASSIGNMENT: "SALESFORCE_ASSIGNMENT",
} as const;

export type AssignmentReasonEnum = (typeof AssignmentReasonEnum)[keyof typeof AssignmentReasonEnum];

export const EventTypeAutoTranslatedField = {
  DESCRIPTION: "DESCRIPTION",
  TITLE: "TITLE",
} as const;

export type EventTypeAutoTranslatedField = (typeof EventTypeAutoTranslatedField)[keyof typeof EventTypeAutoTranslatedField];

export const WatchlistType = {
  EMAIL: "EMAIL",
  DOMAIN: "DOMAIN",
  USERNAME: "USERNAME",
} as const;

export type WatchlistType = (typeof WatchlistType)[keyof typeof WatchlistType];

export const WatchlistSeverity = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
  CRITICAL: "CRITICAL",
} as const;

export type WatchlistSeverity = (typeof WatchlistSeverity)[keyof typeof WatchlistSeverity];

export const BillingPeriod = {
  MONTHLY: "MONTHLY",
  ANNUALLY: "ANNUALLY",
} as const;

export type BillingPeriod = (typeof BillingPeriod)[keyof typeof BillingPeriod];

export const IncompleteBookingActionType = {
  SALESFORCE: "SALESFORCE",
} as const;

export type IncompleteBookingActionType = (typeof IncompleteBookingActionType)[keyof typeof IncompleteBookingActionType];

export const FilterSegmentScope = {
  USER: "USER",
  TEAM: "TEAM",
} as const;

export type FilterSegmentScope = (typeof FilterSegmentScope)[keyof typeof FilterSegmentScope];

export const WorkflowContactType = {
  PHONE: "PHONE",
  EMAIL: "EMAIL",
} as const;

export type WorkflowContactType = (typeof WorkflowContactType)[keyof typeof WorkflowContactType];

export const RoleType = {
  SYSTEM: "SYSTEM",
  CUSTOM: "CUSTOM",
} as const;

export type RoleType = (typeof RoleType)[keyof typeof RoleType];
