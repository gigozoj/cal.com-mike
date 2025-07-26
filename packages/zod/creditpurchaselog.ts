import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteCreditBalance, CreditBalanceModel } from "./index"

export const _CreditPurchaseLogModel = z.object({
  id: z.string(),
  creditBalanceId: z.string(),
  credits: z.number().int(),
  createdAt: z.date(),
})

export interface CompleteCreditPurchaseLog extends z.infer<typeof _CreditPurchaseLogModel> {
  creditBalance: CompleteCreditBalance
}

/**
 * CreditPurchaseLogModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const CreditPurchaseLogModel: z.ZodSchema<CompleteCreditPurchaseLog> = z.lazy(() => _CreditPurchaseLogModel.extend({
  creditBalance: CreditBalanceModel,
}))
