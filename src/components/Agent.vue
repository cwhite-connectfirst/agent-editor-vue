<template>
    <div class="agent">
        <span>
            {{agent.agentId}}
        </span>
        <span>
            {{agent.firstName}}
        </span>
        <span>
            {{agent.lastName}}
        </span>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Getter} from "vuex-class";

import {Agent as IAgent} from "../store/types/agents";
import store from "../store";

@Component({
    props: {
        agentId: Number
    },
})
export default class Agent extends Vue {
    @Getter getAgentById!: (id: number) => IAgent;

    get agent(): IAgent {
        return this.getAgentById((<any>this).agentId);
    }
}
</script>