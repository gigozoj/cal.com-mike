import * as z from "zod"
import * as imports from "../zod-utils"
import { WatchlistType, WatchlistSeverity } from "@prisma/client"
import { CompleteUser, UserModel } from "./index"

export const _WatchlistModel = z.object({
  id: z.string(),
  type: z.nativeEnum(WatchlistType),
  value: z.string(),
  description: z.string().nullish(),
  createdAt: z.date(),
  createdById: z.number().int(),
  updatedAt: z.date(),
  updatedById: z.number().int().nullish(),
  severity: z.nativeEnum(WatchlistSeverity),
})

export interface CompleteWatchlist extends z.infer<typeof _WatchlistModel> {
  createdBy: CompleteUser
  updatedBy?: CompleteUser | null
}

/**
 * WatchlistModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WatchlistModel: z.ZodSchema<CompleteWatchlist> = z.lazy(() => _WatchlistModel.extend({
  createdBy: UserModel,
  updatedBy: UserModel.nullish(),
}))
