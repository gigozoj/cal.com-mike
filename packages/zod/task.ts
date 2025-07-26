import * as z from "zod"
import * as imports from "../zod-utils"

export const _TaskModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  scheduledAt: z.date(),
  succeededAt: z.date().nullish(),
  type: z.string(),
  payload: z.string(),
  attempts: z.number().int(),
  maxAttempts: z.number().int(),
  lastError: z.string().nullish(),
  lastFailedAttemptAt: z.date().nullish(),
  referenceUid: z.string().nullish(),
})
