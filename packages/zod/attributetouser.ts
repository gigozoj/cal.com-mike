import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteMembership, MembershipModel, CompleteAttributeOption, AttributeOptionModel, CompleteUser, UserModel, CompleteDSyncData, DSyncDataModel } from "./index"

export const _AttributeToUserModel = z.object({
  id: z.string(),
  memberId: z.number().int(),
  attributeOptionId: z.string(),
  weight: z.number().int().nullish(),
  createdAt: z.date(),
  createdById: z.number().int().nullish(),
  createdByDSyncId: z.string().nullish(),
  updatedAt: z.date().nullish(),
  updatedById: z.number().int().nullish(),
  updatedByDSyncId: z.string().nullish(),
})

export interface CompleteAttributeToUser extends z.infer<typeof _AttributeToUserModel> {
  member: CompleteMembership
  attributeOption: CompleteAttributeOption
  createdBy?: CompleteUser | null
  createdByDSync?: CompleteDSyncData | null
  updatedBy?: CompleteUser | null
  updatedByDSync?: CompleteDSyncData | null
}

/**
 * AttributeToUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const AttributeToUserModel: z.ZodSchema<CompleteAttributeToUser> = z.lazy(() => _AttributeToUserModel.extend({
  member: MembershipModel,
  attributeOption: AttributeOptionModel,
  createdBy: UserModel.nullish(),
  createdByDSync: DSyncDataModel.nullish(),
  updatedBy: UserModel.nullish(),
  updatedByDSync: DSyncDataModel.nullish(),
}))
