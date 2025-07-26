import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompletePlatformOAuthClient, PlatformOAuthClientModel } from "./index"

export const _AccessTokenModel = z.object({
  id: z.number().int(),
  secret: z.string(),
  createdAt: z.date(),
  expiresAt: z.date(),
  platformOAuthClientId: z.string(),
  userId: z.number().int(),
})

export interface CompleteAccessToken extends z.infer<typeof _AccessTokenModel> {
  owner: CompleteUser
  client: CompletePlatformOAuthClient
}

/**
 * AccessTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AccessTokenModel: z.ZodSchema<CompleteAccessToken> = z.lazy(() => _AccessTokenModel.extend({
  owner: UserModel,
  client: PlatformOAuthClientModel,
}))
