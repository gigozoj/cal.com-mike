import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteTeam, TeamModel, CompleteAccessToken, AccessTokenModel, CompleteRefreshToken, RefreshTokenModel, CompletePlatformAuthorizationToken, PlatformAuthorizationTokenModel, CompleteWebhook, WebhookModel } from "./index"

export const _PlatformOAuthClientModel = z.object({
  id: z.string(),
  name: z.string(),
  secret: z.string(),
  permissions: z.number().int(),
  logo: z.string().nullish(),
  redirectUris: z.string().array(),
  organizationId: z.number().int(),
  bookingRedirectUri: z.string().nullish(),
  bookingCancelRedirectUri: z.string().nullish(),
  bookingRescheduleRedirectUri: z.string().nullish(),
  areEmailsEnabled: z.boolean(),
  areDefaultEventTypesEnabled: z.boolean(),
  areCalendarEventsEnabled: z.boolean(),
  createdAt: z.date(),
})

export interface CompletePlatformOAuthClient extends z.infer<typeof _PlatformOAuthClientModel> {
  users: CompleteUser[]
  organization: CompleteTeam
  teams: CompleteTeam[]
  accessTokens: CompleteAccessToken[]
  refreshToken: CompleteRefreshToken[]
  authorizationTokens: CompletePlatformAuthorizationToken[]
  webhook: CompleteWebhook[]
}

/**
 * PlatformOAuthClientModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const PlatformOAuthClientModel: z.ZodSchema<CompletePlatformOAuthClient> = z.lazy(() => _PlatformOAuthClientModel.extend({
  users: UserModel.array(),
  organization: TeamModel,
  teams: TeamModel.array(),
  accessTokens: AccessTokenModel.array(),
  refreshToken: RefreshTokenModel.array(),
  authorizationTokens: PlatformAuthorizationTokenModel.array(),
  webhook: WebhookModel.array(),
}))
