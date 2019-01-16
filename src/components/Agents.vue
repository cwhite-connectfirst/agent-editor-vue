<template>
    <div id="all-agents">
        <h1>Stub for Agent Groups</h1>
        <ul id="all-agents-list">
            <li v-for="agentId in allAgentIds" v-bind:key="agentId">
                <Agent :agent-id="agentId"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Component from "vue-class-component";
import Vue from "vue";
import {mapGetters} from "vuex";

import Agent from "./Agent";

@Component({
    computed: { ...mapGetters(["allAgentIds"]) },
    components: { Agent }
})
export default class Agents extends Vue {}
</script>

<style></style>