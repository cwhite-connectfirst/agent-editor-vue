import {ActionContext, Module, ActionTree, MutationTree, GetterTree} from "vuex";

import {AgentMap, AgentGroupMap, AgentGroup, Agent} from "../types/agents";
import {RootState} from "../types/RootState";
import AgentApi, {GetAgentsResult} from "../../api/agents";

export interface AgentState {
    agents: AgentMap,
    agentGroups: AgentGroupMap,
    agentGroupIds: AgentGroup["agentGroupId"][]
}

const state: AgentState = {
    agents: {},
    agentGroups: {},
    agentGroupIds: []
}

const mutations: MutationTree<AgentState> = {
    initialize(state: AgentState, {entities: {agents, agentGroups}, result}: GetAgentsResult) {
        state.agents = agents,
        state.agentGroups = agentGroups,
        state.agentGroupIds = result
    }
}

const actions: ActionTree<AgentState, RootState> = {
    async initialize({ commit }: ActionContext<AgentState, {}>) {
        commit("initialize", await AgentApi.getAgents());
    }
}

const getters: GetterTree<AgentState, RootState> = {
    getAgentById: (state: AgentState) => (id: number): Agent => state.agents[id],

    allAgentIds: (state: AgentState) => Object.keys(state.agents).map(Number),

    getAgentGroupById: (state: AgentState) => (id: number): AgentGroup => state.agentGroups[id]
}

const AgentModule: Module<AgentState, RootState> = {state, mutations, actions, getters};

export default AgentModule;