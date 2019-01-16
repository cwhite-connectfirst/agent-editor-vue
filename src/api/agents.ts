import {normalize, schema} from "normalizr";
import axios from "axios";
import {AgentGroupMap, AgentMap, Agent, AgentGroup, AgentDetails} from "../store/types/agents";

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

const accountId = 99999999;
const defaultConfig = {
    headers: {
        "x-auth-token": "033fbe96-057c-493a-8d73-2bf3e5bf9bd4"
    }
}

export default {
    async getAgents(): Promise<GetAgentsResult> {
        return axios
        .get(`/api/v2-skinny/admin/accounts/${accountId}/agentGroups/withActiveChildren`, {...defaultConfig})
        .then((result: any): GetAgentsResult => normalize(result.data, agentGroups));
    },

    async getAgentDetails(agentGroupId: AgentGroup["agentGroupId"], agentId: Agent["agentId"]): Promise<AgentDetails> {
        return axios
        .get(`/api/v1/admin/accounts/${accountId}/agentGroups/${agentGroupId}/agents/${agentId}`, {...defaultConfig})
        .then((result: any) => result.data);
    },

    async updateAgentDetails(agent: AgentDetails): Promise<AgentDetails> {
        return axios
        .put(`/api/v1/admin/accounts/${accountId}/agentGroups/${agent.agentGroup.id}/agents/${agent.agentId}`, agent, {...defaultConfig})
        .then((result: any) => result.data);
    }
}

