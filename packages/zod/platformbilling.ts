import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteTeam, TeamModel } from "./index"

export const _PlatformBillingModel = z.object({
  id: z.number().int(),
  customerId: z.string(),
  subscriptionId: z.string().nullish(),
  priceId: z.string().nullish(),
  plan: z.string(),
  billingCycleStart: z.number().int().nullish(),
  billingCycleEnd: z.number().int().nullish(),
  overdue: z.boolean().nullish(),
  managerBillingId: z.number().int().nullish(),
})

export interface CompletePlatformBilling extends z.infer<typeof _PlatformBillingModel> {
  managerBilling?: CompletePlatformBilling | null
  managedBillings: CompletePlatformBilling[]
  team: CompleteTeam
}

/**
 * PlatformBillingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const PlatformBillingModel: z.ZodSchema<CompletePlatformBilling> = z.lazy(() => _PlatformBillingModel.extend({
  managerBilling: PlatformBillingModel.nullish(),
  managedBillings: PlatformBillingModel.array(),
  team: TeamModel,
}))
