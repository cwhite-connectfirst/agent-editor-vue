import Vue from "vue";
import {OPEN_ADD_EDIT_MODAL, OpenAddEditModalData} from "./open-add-edit-modal";


interface EventBus extends Vue {
    $emit(event: typeof OPEN_ADD_EDIT_MODAL, payload: OpenAddEditModalData, ...args: any[]): this,
    $on(event: typeof OPEN_ADD_EDIT_MODAL, callback: (payload: OpenAddEditModalData) => any): this,
}

const bus: EventBus = new Vue();

export * from "./open-add-edit-modal";
export default bus;