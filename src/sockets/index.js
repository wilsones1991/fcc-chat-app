import * as types from "../constants/ActionTypes.js"

import { addUser, messageReceived, populateUsersList } from "../actions"

const setUpSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989')

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: types.ADD_USER,
            name: username
        }))
    }
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        switch (data.type) {
            // Basically this runs when the server sends a new message to the client. We dispatch the "Message Received" action to the store
            case types.ADD_MESSAGE:
                dispatch(messageReceived(data.message, data.author))
                break
            case types.ADD_USER:
                dispatch(addUser(data.name))
                break
            case types.USERS_LIST:
                dispatch(populateUsersList(data.users))
                break
            default:
                break
        }
    }
    return socket
}

export default setUpSocket