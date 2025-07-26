import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteWorkflow, WorkflowModel, CompleteTeam, TeamModel } from "./index"

export const _WorkflowsOnTeamsModel = z.object({
  id: z.number().int(),
  workflowId: z.number().int(),
  teamId: z.number().int(),
})

export interface CompleteWorkflowsOnTeams extends z.infer<typeof _WorkflowsOnTeamsModel> {
  workflow: CompleteWorkflow
  team: CompleteTeam
}

/**
 * WorkflowsOnTeamsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WorkflowsOnTeamsModel: z.ZodSchema<CompleteWorkflowsOnTeams> = z.lazy(() => _WorkflowsOnTeamsModel.extend({
  workflow: WorkflowModel,
  team: TeamModel,
}))
