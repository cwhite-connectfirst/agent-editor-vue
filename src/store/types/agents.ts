export enum AgentTypes {
    AGENT = "AGENT"
}

export interface Agent {
    agentGroupId: number;
    agentId: number;
    agentType: AgentTypes;
    firstName: string;
    isActive: boolean;
    lastName: string;
    username: string;
}

export interface AgentGroup {
    accountId: string;
    agentGroupId: number;
    groupName: string;
    agents: number[];
}