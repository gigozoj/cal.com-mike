import * as z from "zod"
import * as imports from "../zod-utils"
import { AttributeType } from "@prisma/client"
import { CompleteTeam, TeamModel, CompleteAttributeOption, AttributeOptionModel } from "./index"

export const _AttributeModel = z.object({
  id: z.string(),
  teamId: z.number().int(),
  type: z.nativeEnum(AttributeType),
  name: z.string(),
  slug: z.string(),
  enabled: z.boolean(),
  usersCanEditRelation: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isWeightsEnabled: z.boolean(),
  isLocked: z.boolean(),
})

export interface CompleteAttribute extends z.infer<typeof _AttributeModel> {
  team: CompleteTeam
  options: CompleteAttributeOption[]
}

/**
 * AttributeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AttributeModel: z.ZodSchema<CompleteAttribute> = z.lazy(() => _AttributeModel.extend({
  team: TeamModel,
  options: AttributeOptionModel.array(),
}))
