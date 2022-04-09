import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

// Function generator will return something slighlty different?
const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.username
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewMessage