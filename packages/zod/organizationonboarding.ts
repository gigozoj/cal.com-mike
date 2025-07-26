import * as z from "zod"
import * as imports from "../zod-utils"
import { BillingPeriod } from "@prisma/client"
import { CompleteUser, UserModel, CompleteTeam, TeamModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _OrganizationOnboardingModel = z.object({
  id: z.string(),
  createdById: z.number().int(),
  createdAt: z.date(),
  orgOwnerEmail: z.string(),
  error: z.string().nullish(),
  updatedAt: z.date(),
  organizationId: z.number().int().nullish(),
  billingPeriod: z.nativeEnum(BillingPeriod),
  pricePerSeat: z.number(),
  seats: z.number().int(),
  isPlatform: z.boolean(),
  name: z.string(),
  slug: z.string(),
  logo: z.string().nullish(),
  bio: z.string().nullish(),
  isDomainConfigured: z.boolean(),
  stripeCustomerId: z.string().nullish(),
  stripeSubscriptionId: z.string().nullish(),
  stripeSubscriptionItemId: z.string().nullish(),
  invitedMembers: imports.orgOnboardingInvitedMembersSchema,
  teams: imports.orgOnboardingTeamsSchema,
  isComplete: z.boolean(),
})

export interface CompleteOrganizationOnboarding extends z.infer<typeof _OrganizationOnboardingModel> {
  createdBy: CompleteUser
  organization?: CompleteTeam | null
}

/**
 * OrganizationOnboardingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const OrganizationOnboardingModel: z.ZodSchema<CompleteOrganizationOnboarding> = z.lazy(() => _OrganizationOnboardingModel.extend({
  createdBy: UserModel,
  organization: TeamModel.nullish(),
}))
