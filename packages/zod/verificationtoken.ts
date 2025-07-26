import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel, CompleteSecondaryEmail, SecondaryEmailModel } from "./index"

export const _VerificationTokenModel = z.object({
  id: z.number().int(),
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
  expiresInDays: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  teamId: z.number().int().nullish(),
  secondaryEmailId: z.number().int().nullish(),
})

export interface CompleteVerificationToken extends z.infer<typeof _VerificationTokenModel> {
  team?: CompleteTeam | null
  secondaryEmail?: CompleteSecondaryEmail | null
}

/**
 * VerificationTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const VerificationTokenModel: z.ZodSchema<CompleteVerificationToken> = z.lazy(() => _VerificationTokenModel.extend({
  team: TeamModel.nullish(),
  secondaryEmail: SecondaryEmailModel.nullish(),
}))
