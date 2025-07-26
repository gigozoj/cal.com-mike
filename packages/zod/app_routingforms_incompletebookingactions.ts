import * as z from "zod"
import * as imports from "../zod-utils"
import { IncompleteBookingActionType } from "@prisma/client"
import { CompleteApp_RoutingForms_Form, App_RoutingForms_FormModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _App_RoutingForms_IncompleteBookingActionsModel = z.object({
  id: z.number().int(),
  formId: z.string(),
  actionType: z.nativeEnum(IncompleteBookingActionType),
  data: jsonSchema,
  enabled: z.boolean(),
  credentialId: z.number().int().nullish(),
})

export interface CompleteApp_RoutingForms_IncompleteBookingActions extends z.infer<typeof _App_RoutingForms_IncompleteBookingActionsModel> {
  form: CompleteApp_RoutingForms_Form
}

/**
 * App_RoutingForms_IncompleteBookingActionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const App_RoutingForms_IncompleteBookingActionsModel: z.ZodSchema<CompleteApp_RoutingForms_IncompleteBookingActions> = z.lazy(() => _App_RoutingForms_IncompleteBookingActionsModel.extend({
  form: App_RoutingForms_FormModel,
}))
