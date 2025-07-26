import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteApp_RoutingForms_Form, App_RoutingForms_FormModel, CompleteApp_RoutingForms_FormResponse, App_RoutingForms_FormResponseModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _App_RoutingForms_QueuedFormResponseModel = z.object({
  id: z.string(),
  formId: z.string(),
  response: jsonSchema,
  chosenRouteId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  actualResponseId: z.number().int().nullish(),
})

export interface CompleteApp_RoutingForms_QueuedFormResponse extends z.infer<typeof _App_RoutingForms_QueuedFormResponseModel> {
  form: CompleteApp_RoutingForms_Form
  actualResponse?: CompleteApp_RoutingForms_FormResponse | null
}

/**
 * App_RoutingForms_QueuedFormResponseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const App_RoutingForms_QueuedFormResponseModel: z.ZodSchema<CompleteApp_RoutingForms_QueuedFormResponse> = z.lazy(() => _App_RoutingForms_QueuedFormResponseModel.extend({
  form: App_RoutingForms_FormModel,
  actualResponse: App_RoutingForms_FormResponseModel.nullish(),
}))
