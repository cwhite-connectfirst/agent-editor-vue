import {ActionContext, Module, ActionTree, MutationTree, GetterTree} from "vuex";

import {AgentMap, AgentGroupMap, AgentGroup, Agent, AgentDetails} from "../types/agents";
import {RootState} from "../types/RootState";
import AgentApi, {GetAgentsResult} from "../../api/agents";
import agents from '../../api/agents';

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
    },

    updateAgent(state: AgentState, payload: {agent: AgentDetails, propsToUpdate: any}) {
        const {propsToUpdate, agent} = payload;
        const agentToUpdate = state.agents[agent.agentId];

        Object.keys(propsToUpdate).forEach((val: string) => {
            if (agentToUpdate.hasOwnProperty(val) && agent.hasOwnProperty(val)) {
                agentToUpdate[val as keyof Agent] = agent[val as keyof Agent];
            }
        });
    }
}

const actions: ActionTree<AgentState, RootState> = {
    async initialize({ commit }: ActionContext<AgentState, RootState>) {
        commit("initialize", await AgentApi.getAgents());
    },

    async updateAgent({ commit }: ActionContext<AgentState, RootState>, payload: {agent: AgentDetails, propsToUpdate: any}) {
        const {agent, propsToUpdate} = payload;
        
        let updatedAgent = {...agent, ...propsToUpdate as Agent};
        updatedAgent = await AgentApi.updateAgentDetails(updatedAgent);
        commit("updateAgent", {agent: updatedAgent, propsToUpdate});
    }
}

const getters: GetterTree<AgentState, RootState> = {
    getAgentById: (state: AgentState) => (id: number): Agent => state.agents[id],

    allAgentIds: (state: AgentState) => Object.keys(state.agents).map(Number),

    getAgentGroupById: (state: AgentState) => (id: number): AgentGroup => state.agentGroups[id]
}

const AgentModule: Module<AgentState, RootState> = {state, mutations, actions, getters};

export default AgentModule;