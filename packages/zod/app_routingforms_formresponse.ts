import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteApp_RoutingForms_Form, App_RoutingForms_FormModel, CompleteBooking, BookingModel, CompleteRoutingFormResponseField, RoutingFormResponseFieldModel, CompleteRoutingFormResponseDenormalized, RoutingFormResponseDenormalizedModel, CompleteApp_RoutingForms_QueuedFormResponse, App_RoutingForms_QueuedFormResponseModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _App_RoutingForms_FormResponseModel = z.object({
  id: z.number().int(),
  uuid: z.string().nullish(),
  formFillerId: z.string(),
  formId: z.string(),
  response: jsonSchema,
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  routedToBookingUid: z.string().nullish(),
  chosenRouteId: z.string().nullish(),
})

export interface CompleteApp_RoutingForms_FormResponse extends z.infer<typeof _App_RoutingForms_FormResponseModel> {
  form: CompleteApp_RoutingForms_Form
  routedToBooking?: CompleteBooking | null
  routingFormResponseFields: CompleteRoutingFormResponseField[]
  routingFormResponses: CompleteRoutingFormResponseDenormalized[]
  queuedFormResponse?: CompleteApp_RoutingForms_QueuedFormResponse | null
}

/**
 * App_RoutingForms_FormResponseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const App_RoutingForms_FormResponseModel: z.ZodSchema<CompleteApp_RoutingForms_FormResponse> = z.lazy(() => _App_RoutingForms_FormResponseModel.extend({
  form: App_RoutingForms_FormModel,
  routedToBooking: BookingModel.nullish(),
  routingFormResponseFields: RoutingFormResponseFieldModel.array(),
  routingFormResponses: RoutingFormResponseDenormalizedModel.array(),
  queuedFormResponse: App_RoutingForms_QueuedFormResponseModel.nullish(),
}))
