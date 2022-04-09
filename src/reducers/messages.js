// Remember with all these modules to type in your import and export your needed modules!

import * as types from "../constants/ActionTypes"

// pass in current state and action - if there's no state, go with the default
const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return [...states, {
                message: action.message,
                author: action.author,
                id: action.id
            } ]
        default:
            return state
    }
}

export default messages