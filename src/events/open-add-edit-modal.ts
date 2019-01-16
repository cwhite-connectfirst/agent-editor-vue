import {Agent} from "../store/types";

export const OPEN_ADD_EDIT_MODAL: 'open-add-edit-modal' = 'open-add-edit-modal';

export interface OpenAddEditModalData {
    agentId: Agent["agentId"];
    agentGroupId: Agent["agentGroupId"];
}