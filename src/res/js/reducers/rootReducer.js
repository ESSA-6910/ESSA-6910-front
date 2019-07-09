import {
    SET_ALERT,
    RESET_ALERT,
    SET_LIST
} from "../constants/action-types";

const initialState = {
    students: [],
    alert: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LIST:
            return Object.assign({}, state, {
                students: action.payload
            })
        case SET_ALERT:
            return Object.assign({}, state, {
                alert: action.payload
            })
        case RESET_ALERT:
            return Object.assign({}, state, {
                alert: ''
            })
        default:
            return state;
    }
}

export default rootReducer;