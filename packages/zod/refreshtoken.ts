import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompletePlatformOAuthClient, PlatformOAuthClientModel } from "./index"

export const _RefreshTokenModel = z.object({
  id: z.number().int(),
  secret: z.string(),
  createdAt: z.date(),
  expiresAt: z.date(),
  platformOAuthClientId: z.string(),
  userId: z.number().int(),
})

export interface CompleteRefreshToken extends z.infer<typeof _RefreshTokenModel> {
  owner: CompleteUser
  client: CompletePlatformOAuthClient
}

/**
 * RefreshTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RefreshTokenModel: z.ZodSchema<CompleteRefreshToken> = z.lazy(() => _RefreshTokenModel.extend({
  owner: UserModel,
  client: PlatformOAuthClientModel,
}))
