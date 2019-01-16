import {ActionContext} from "vuex";

import {AgentMap, AgentGroupMap, AgentGroup} from "../types/agents";
import AgentApi, {GetAgentsResult} from "../../api/agents";

interface AgentState {
    agents: AgentMap,
    agentGroups: AgentGroupMap,
    agentGroupIds: AgentGroup["agentGroupId"][]
}

const state: AgentState = {
    agents: {},
    agentGroups: {},
    agentGroupIds: []
}

const mutations = {
    initialize(state: AgentState, {entities: {agents, agentGroups}, result}: GetAgentsResult) {
        state.agents = agents,
        state.agentGroups = agentGroups,
        state.agentGroupIds = result
    }
}

const actions = {
    async initialize({ commit }: ActionContext<AgentState, {}>) {
        commit("initialize", await AgentApi.getAgents());
    }
}

const getters = {
    agentById(state: AgentState, id: number) {
        return state.agents[id];
    },

    allAgentIds(state: AgentState) {
        return Object.keys(state.agents).map(Number);
    }
}

export default {state, mutations, actions, getters};