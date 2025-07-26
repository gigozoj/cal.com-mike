import * as z from "zod"
import * as imports from "../zod-utils"
import { WorkflowContactType } from "@prisma/client"

export const _WorkflowOptOutContactModel = z.object({
  id: z.number().int(),
  type: z.nativeEnum(WorkflowContactType),
  value: z.string(),
  optedOut: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
