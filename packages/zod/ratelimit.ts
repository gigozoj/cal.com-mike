import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteApiKey, ApiKeyModel } from "./index"

export const _RateLimitModel = z.object({
  id: z.string(),
  name: z.string(),
  apiKeyId: z.string(),
  ttl: z.number().int(),
  limit: z.number().int(),
  blockDuration: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteRateLimit extends z.infer<typeof _RateLimitModel> {
  apiKey: CompleteApiKey
}

/**
 * RateLimitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RateLimitModel: z.ZodSchema<CompleteRateLimit> = z.lazy(() => _RateLimitModel.extend({
  apiKey: ApiKeyModel,
}))
