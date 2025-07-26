import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteApp_RoutingForms_FormResponse, App_RoutingForms_FormResponseModel, CompleteRoutingFormResponseDenormalized, RoutingFormResponseDenormalizedModel } from "./index"

export const _RoutingFormResponseFieldModel = z.object({
  id: z.number().int(),
  responseId: z.number().int(),
  fieldId: z.string(),
  valueString: z.string().nullish(),
  valueNumber: z.number().nullish(),
  valueStringArray: z.string().array(),
})

export interface CompleteRoutingFormResponseField extends z.infer<typeof _RoutingFormResponseFieldModel> {
  response: CompleteApp_RoutingForms_FormResponse
  denormalized: CompleteRoutingFormResponseDenormalized
}

/**
 * RoutingFormResponseFieldModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RoutingFormResponseFieldModel: z.ZodSchema<CompleteRoutingFormResponseField> = z.lazy(() => _RoutingFormResponseFieldModel.extend({
  response: App_RoutingForms_FormResponseModel,
  denormalized: RoutingFormResponseDenormalizedModel,
}))
