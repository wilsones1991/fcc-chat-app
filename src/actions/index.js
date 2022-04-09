/* So these are action creators, but they DO NOT directly change state.

They are creating an object for the reducer to then figure out how to change the state.*/

import * as types from "../constants/ActionTypes.js"

let nextMessageId = 0
let nextUserId = 0

// Action creator when current user is creating a message
export const addMessage = (message, author) => ({
    // type of action
    type: types.ADD_MESSAGE,
    // increment messageId when new message is created.
    id: nextMessageId++,
    message,
    author
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

// user received a new message
export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
})

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})