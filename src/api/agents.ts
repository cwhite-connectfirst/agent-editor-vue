import {normalize, schema} from "normalizr";
import axios from "axios";
import {AgentGroupMap, AgentMap, AgentGroup} from "../store/types/agents";

const agent = new schema.Entity('agents', {}, { idAttribute: "agentId" });

const agentGroup = new schema.Entity('agentGroups', { agents: [ agent ] }, {idAttribute: "agentGroupId"});

const agentGroups =  [ agentGroup ];

export interface GetAgentsResult {
    entities: {
        agentGroups: AgentGroupMap,
        agents: AgentMap
    },
    result: AgentGroup["agentGroupId"][];
}

// Stub for fetching agents
export default {
    async getAgents(): Promise<GetAgentsResult> {
        return axios
        .get("/api/v2-skinny/admin/accounts/99999999/agentGroups/withActiveChildren", {
            headers: {
                "x-auth-token": "33af27fd-4a22-431d-90bf-19bf63d8493a"
            }
        })
        .then((result: any): GetAgentsResult => normalize(result.data, agentGroups));
    }
}

