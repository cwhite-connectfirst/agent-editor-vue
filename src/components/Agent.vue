<template>
    <div class="agent">
        <span>
           {{agentId}}
        </span>
    </div>
</template>

<script>
import Component from "vue-class-component";
import Vue from "vue";

@Component({
    props: {
        agentId: Number
    },
})
export default class Agent extends Vue {}
</script>