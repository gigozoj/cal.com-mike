import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteDelegationCredential, DelegationCredentialModel, CompleteDomainWideDelegation, DomainWideDelegationModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _WorkspacePlatformModel = z.object({
  id: z.number().int(),
  slug: z.string().min(1),
  name: z.string().min(1),
  description: z.string(),
  defaultServiceAccountKey: imports.serviceAccountKeySchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  enabled: z.boolean(),
})

export interface CompleteWorkspacePlatform extends z.infer<typeof _WorkspacePlatformModel> {
  delegationCredentials: CompleteDelegationCredential[]
  domainWideDelegations: CompleteDomainWideDelegation[]
}

/**
 * WorkspacePlatformModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WorkspacePlatformModel: z.ZodSchema<CompleteWorkspacePlatform> = z.lazy(() => _WorkspacePlatformModel.extend({
  delegationCredentials: DelegationCredentialModel.array(),
  domainWideDelegations: DomainWideDelegationModel.array(),
}))
