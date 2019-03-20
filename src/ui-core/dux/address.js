const ADD_ADDRESS = "ADD_ADDRESS";
const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";
const DISPLAY_UI = "DISPLAY_UI";

const initialState = {
    address: "",
    showAddressModal: true,
    displayUi: false
};

export const actions = {
    addAddress(address) {
        return { type: ADD_ADDRESS, payload: address };
    },
    showModal() {
        return { type: SHOW_MODAL };
    },
    hideModal() {
        return { type: HIDE_MODAL };
    },
    displayUi() {
        return { type: DISPLAY_UI };
    }
};

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ADDRESS: {
            return {
                ...state,
                address: payload
            };
        }
        case SHOW_MODAL: {
            return {
                ...state,
                showAddressModal: true
            };
        }
        case HIDE_MODAL: {
            return {
                ...state,
                showAddressModal: false
            };
        }
        case DISPLAY_UI: {
            return {
                ...state,
                displayUi: true
            };
        }
        default:
            return state;
    }
}