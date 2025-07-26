import * as z from "zod"
import * as imports from "../zod-utils"
import { FilterSegmentScope } from "@prisma/client"
import { CompleteUser, UserModel, CompleteTeam, TeamModel, CompleteUserFilterSegmentPreference, UserFilterSegmentPreferenceModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _FilterSegmentModel = z.object({
  id: z.number().int(),
  name: z.string(),
  tableIdentifier: z.string(),
  scope: z.nativeEnum(FilterSegmentScope),
  activeFilters: jsonSchema,
  sorting: jsonSchema,
  columnVisibility: jsonSchema,
  columnSizing: jsonSchema,
  perPage: z.number().int(),
  searchTerm: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  teamId: z.number().int().nullish(),
})

export interface CompleteFilterSegment extends z.infer<typeof _FilterSegmentModel> {
  user: CompleteUser
  team?: CompleteTeam | null
  userPreferences: CompleteUserFilterSegmentPreference[]
}

/**
 * FilterSegmentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const FilterSegmentModel: z.ZodSchema<CompleteFilterSegment> = z.lazy(() => _FilterSegmentModel.extend({
  user: UserModel,
  team: TeamModel.nullish(),
  userPreferences: UserFilterSegmentPreferenceModel.array(),
}))
