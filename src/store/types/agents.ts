export enum AgentTypes {
    AGENT = "AGENT",
    SUPERVISOR = "SUPERVISOR"
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
    accountId?: string;
    agentGroupId: number;
    groupName: string;
    agents?: number[];
}

export interface AgentMap {
    [key: number]: Agent;
}

export interface AgentGroupMap {
    [key: number]: AgentGroup;
}

export interface AgentDetails extends Agent {
    permissions?: (null)[] | null;
    email: string;
    password: string;
    defaultLoginDest: string;
    altDefaultLoginDest?: null;
    lastLoginDate?: null;
    agentRank: number;
    createdOn: string;
    maxChats: number;
    externalAgentId?: null;
    directAgentExtension?: null;
    allowInbound: boolean;
    allowOutbound: boolean;
    allowExternalChat: boolean;
    allowChat: boolean;
    allowBlended: boolean;
    allowChatVoiceConcurrent: boolean;
    allowOffHook: boolean;
    allowCallControl: boolean;
    allowHold: boolean;
    allowTransfer: boolean;
    allowManualIntlTransfer: boolean;
    allowDirectAgentTransfer: string;
    allowHangup: boolean;
    allowRequeue: boolean;
    allowLoginControl: boolean;
    allowLoginUpdates: boolean;
    allowCrossGateRequeue: boolean;
    gatesControlAgentVisibility: boolean;
    allowCampStats: boolean;
    allowGateStats: boolean;
    allowAgentStats: boolean;
    allowChatStats: boolean;
    disableSupervisorMonitoring: boolean;
    allowAgentReports: boolean;
    allowManualCalls: boolean;
    allowManualIntlCalls: boolean;
    allowInboundIntlTransfer: boolean;
    allowLeadInserts: boolean;
    allowAutoAnswer: boolean;
    defaultAutoAnswerOn: boolean;
    isActive: boolean;
    ghostRnaAction: string;
    loadBalanceEnabled: boolean;
    transientAgent: boolean;
    parentAgentId?: null;
    transientDelete: boolean;
    transientDeleteDate?: null;
    phoneLoginPin?: null;
    multiAccountAgent: boolean;
    initLoginBaseState: string;
    initLoginBaseStateId?: null;
    enableSoftphone: boolean;
    softphoneId: number;
    allowFromIpAddresses?: null;
    location?: null;
    team: string;
    showLeadHistory: boolean;
    manualOutboundDefaultCallerId: string;
    allowManualOutboundGates: boolean;
    allowManualPass: boolean;
    allowEndcallforeveryone: boolean;
    allowHistoricalDialing: boolean;
    agentAccountAccess?: null;
    agentGateAccess?: null;
    agentGateGroupAccess?: null;
    agentChatGroupAccess?: null;
    agentGroup: AgentDetailsAgentGroup;
    manualOutboundDefaultGate?: null;
    phoneLoginDialGroup?: null;
    agentSkillProfiles?: null;
    agentDialGroupMembers?: null;
    agentChatQueueAccesses?: null;
    agentLoadBalanceMembers?: null;
    groupId: number;
    agentLoadBalance?: null;
    sipSafeUsername: string;
    accountAccess?: null;
    whereSupervisor?: null;
    whereSupervisee?: (WhereSuperviseeEntity)[] | null;
    active: boolean;
}

export interface WhereSuperviseeEntity {
    agentId: number;
    supervisorId: number;
}

export interface AgentDetailsAgentGroup {
    id: number;
    description: "Cable Group";
}