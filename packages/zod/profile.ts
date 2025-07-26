import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteTeam, TeamModel, CompleteEventType, EventTypeModel } from "./index"

export const _ProfileModel = z.object({
  id: z.number().int(),
  uid: z.string(),
  userId: z.number().int(),
  organizationId: z.number().int(),
  username: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProfile extends z.infer<typeof _ProfileModel> {
  user: CompleteUser
  organization: CompleteTeam
  eventTypes: CompleteEventType[]
  movedFromUser?: CompleteUser | null
}

/**
 * ProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ProfileModel: z.ZodSchema<CompleteProfile> = z.lazy(() => _ProfileModel.extend({
  user: UserModel,
  organization: TeamModel,
  eventTypes: EventTypeModel.array(),
  movedFromUser: UserModel.nullish(),
}))
