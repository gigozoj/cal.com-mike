import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteTeam, TeamModel } from "./index"

export const _VerifiedEmailModel = z.object({
  id: z.number().int(),
  userId: z.number().int().nullish(),
  teamId: z.number().int().nullish(),
  email: z.string(),
})

export interface CompleteVerifiedEmail extends z.infer<typeof _VerifiedEmailModel> {
  user?: CompleteUser | null
  team?: CompleteTeam | null
}

/**
 * VerifiedEmailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const VerifiedEmailModel: z.ZodSchema<CompleteVerifiedEmail> = z.lazy(() => _VerifiedEmailModel.extend({
  user: UserModel.nullish(),
  team: TeamModel.nullish(),
}))
