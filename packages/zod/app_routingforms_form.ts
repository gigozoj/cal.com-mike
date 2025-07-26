import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteTeam, TeamModel, CompleteApp_RoutingForms_FormResponse, App_RoutingForms_FormResponseModel, CompleteApp_RoutingForms_QueuedFormResponse, App_RoutingForms_QueuedFormResponseModel, CompleteApp_RoutingForms_IncompleteBookingActions, App_RoutingForms_IncompleteBookingActionsModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _App_RoutingForms_FormModel = z.object({
  id: z.string(),
  description: z.string().nullish(),
  position: z.number().int(),
  routes: jsonSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  fields: jsonSchema,
  updatedById: z.number().int().nullish(),
  userId: z.number().int(),
  teamId: z.number().int().nullish(),
  disabled: z.boolean(),
  settings: imports.RoutingFormSettings,
})

export interface CompleteApp_RoutingForms_Form extends z.infer<typeof _App_RoutingForms_FormModel> {
  user: CompleteUser
  updatedBy?: CompleteUser | null
  team?: CompleteTeam | null
  responses: CompleteApp_RoutingForms_FormResponse[]
  queuedResponses: CompleteApp_RoutingForms_QueuedFormResponse[]
  incompleteBookingActions: CompleteApp_RoutingForms_IncompleteBookingActions[]
}

/**
 * App_RoutingForms_FormModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const App_RoutingForms_FormModel: z.ZodSchema<CompleteApp_RoutingForms_Form> = z.lazy(() => _App_RoutingForms_FormModel.extend({
  user: UserModel,
  updatedBy: UserModel.nullish(),
  team: TeamModel.nullish(),
  responses: App_RoutingForms_FormResponseModel.array(),
  queuedResponses: App_RoutingForms_QueuedFormResponseModel.array(),
  incompleteBookingActions: App_RoutingForms_IncompleteBookingActionsModel.array(),
}))
