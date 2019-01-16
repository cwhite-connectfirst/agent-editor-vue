<template>
    <div class="agent-group">                
        <h4>{{agentGroupName}}</h4>
        <ul class="agent-group-list">
            <li v-for="agentId of agentGroup.agents" v-bind:key="agentId">
                <Agent :agent-id="agentId"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Getter} from "vuex-class";

import {AgentGroup as IAgentGroup} from "../store/types";
import Agent from "./Agent.vue";

@Component({
    props: {
        agentGroupId: Number
    },
    components: {Agent}
})
export default class AgentGroup extends Vue {
    @Getter getAgentGroupById!: (id: number) => IAgentGroup

    get agentGroup() {
        return this.getAgentGroupById((<any>this).agentGroupId);
    }

    get agentGroupName() {
        return this.agentGroup.groupName;
    }
}
</script>