import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel, CompleteUser, UserModel, CompleteCreditExpenseLog, CreditExpenseLogModel, CompleteCreditPurchaseLog, CreditPurchaseLogModel } from "./index"

export const _CreditBalanceModel = z.object({
  id: z.string(),
  teamId: z.number().int().nullish(),
  userId: z.number().int().nullish(),
  additionalCredits: z.number().int(),
  limitReachedAt: z.date().nullish(),
  warningSentAt: z.date().nullish(),
})

export interface CompleteCreditBalance extends z.infer<typeof _CreditBalanceModel> {
  team?: CompleteTeam | null
  user?: CompleteUser | null
  expenseLogs: CompleteCreditExpenseLog[]
  purchaseLogs: CompleteCreditPurchaseLog[]
}

/**
 * CreditBalanceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const CreditBalanceModel: z.ZodSchema<CompleteCreditBalance> = z.lazy(() => _CreditBalanceModel.extend({
  team: TeamModel.nullish(),
  user: UserModel.nullish(),
  expenseLogs: CreditExpenseLogModel.array(),
  purchaseLogs: CreditPurchaseLogModel.array(),
}))
