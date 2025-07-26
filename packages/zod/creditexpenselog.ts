import * as z from "zod"
import * as imports from "../zod-utils"
import { CreditType } from "@prisma/client"
import { CompleteCreditBalance, CreditBalanceModel, CompleteBooking, BookingModel } from "./index"

export const _CreditExpenseLogModel = z.object({
  id: z.string(),
  creditBalanceId: z.string(),
  bookingUid: z.string().nullish(),
  credits: z.number().int().nullish(),
  creditType: z.nativeEnum(CreditType),
  date: z.date(),
  smsSid: z.string().nullish(),
  smsSegments: z.number().int().nullish(),
})

export interface CompleteCreditExpenseLog extends z.infer<typeof _CreditExpenseLogModel> {
  creditBalance: CompleteCreditBalance
  booking?: CompleteBooking | null
}

/**
 * CreditExpenseLogModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const CreditExpenseLogModel: z.ZodSchema<CompleteCreditExpenseLog> = z.lazy(() => _CreditExpenseLogModel.extend({
  creditBalance: CreditBalanceModel,
  booking: BookingModel.nullish(),
}))
