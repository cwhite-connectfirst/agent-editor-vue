import {ActionContext, Module, MutationTree} from "vuex";
import { getStoreAccessors } from "vuex-typescript";

import {AgentGroup, Agent, AgentDetails, AgentState, RootState} from "../types";
import AgentApi, {GetAgentsResult} from "../../api/agents";

const { commit, read, dispatch } = getStoreAccessors<AgentState, RootState>("agents");

const state: AgentState = {
    agents: {},
    agentGroups: {},
    agentGroupIds: []
}

interface UpdateAgentPayload {
    agent: AgentDetails,
    propsToUpdate: any
}

const moduleMutations = {
    initialize(state: AgentState, {entities: {agents, agentGroups}, result}: GetAgentsResult) {
        state.agents = agents,
        state.agentGroups = agentGroups,
        state.agentGroupIds = result
    },

    updateAgent(state: AgentState, payload: UpdateAgentPayload) {
        const {propsToUpdate, agent} = payload;
        const agentToUpdate = state.agents[agent.agentId];

        Object.keys(propsToUpdate).forEach((val: string) => {
            if (agentToUpdate.hasOwnProperty(val) && agent.hasOwnProperty(val)) {
                agentToUpdate[val as keyof Agent] = agent[val as keyof Agent];
            }
        });
    }
}

export const mutations = {
    initialize: commit(moduleMutations.initialize),
    updateAgent: commit(moduleMutations.updateAgent)
};

const moduleActions = {
    async initialize(context: ActionContext<AgentState, RootState>) {
        mutations.initialize(context, await AgentApi.getAgents());
    },

    async updateAgent(context: ActionContext<AgentState, RootState>, payload: {agent: AgentDetails, propsToUpdate: any}) {
        const {agent, propsToUpdate} = payload;
        
        let updatedAgent = {...agent, ...propsToUpdate as Agent};
        updatedAgent = await AgentApi.updateAgentDetails(updatedAgent);
        mutations.updateAgent(context, {agent: updatedAgent, propsToUpdate})
    }
}

export const actions = {
    initialize: dispatch(moduleActions.initialize),
    updateAgent: dispatch(moduleActions.updateAgent)
};

const moduleGetters = {
    getAgentById: (state: AgentState) => (id: number): Agent => state.agents[id],

    allAgentIds: (state: AgentState) => Object.keys(state.agents).map(Number),

    getAgentGroupById: (state: AgentState) => (id: number): AgentGroup => state.agentGroups[id]
}

export const getters = {
    getAgentById: read(moduleGetters.getAgentById),
    allAgentIds: read(moduleGetters.allAgentIds),
    getAgentGroupById: read(moduleGetters.getAgentGroupById)
}

const AgentModule: Module<AgentState, RootState> = {namespaced: true, state, mutations: moduleMutations, actions: moduleActions, getters: moduleGetters};

export default AgentModule;