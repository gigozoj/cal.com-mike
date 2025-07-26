import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteAttribute, AttributeModel, CompleteAttributeToUser, AttributeToUserModel } from "./index"

export const _AttributeOptionModel = z.object({
  id: z.string(),
  attributeId: z.string(),
  value: z.string(),
  slug: z.string(),
  isGroup: z.boolean(),
  contains: z.string().array(),
})

export interface CompleteAttributeOption extends z.infer<typeof _AttributeOptionModel> {
  attribute: CompleteAttribute
  assignedUsers: CompleteAttributeToUser[]
}

/**
 * AttributeOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AttributeOptionModel: z.ZodSchema<CompleteAttributeOption> = z.lazy(() => _AttributeOptionModel.extend({
  attribute: AttributeModel,
  assignedUsers: AttributeToUserModel.array(),
}))
