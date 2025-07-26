import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompletePlatformOAuthClient, PlatformOAuthClientModel } from "./index"

export const _PlatformAuthorizationTokenModel = z.object({
  id: z.string(),
  platformOAuthClientId: z.string(),
  userId: z.number().int(),
  createdAt: z.date(),
})

export interface CompletePlatformAuthorizationToken extends z.infer<typeof _PlatformAuthorizationTokenModel> {
  owner: CompleteUser
  client: CompletePlatformOAuthClient
}

/**
 * PlatformAuthorizationTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const PlatformAuthorizationTokenModel: z.ZodSchema<CompletePlatformAuthorizationToken> = z.lazy(() => _PlatformAuthorizationTokenModel.extend({
  owner: UserModel,
  client: PlatformOAuthClientModel,
}))
