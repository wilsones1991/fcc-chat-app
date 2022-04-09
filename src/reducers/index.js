// This file will be a combined reducer since we're dealing with users and messages from
import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"

const chat = combineReducers({
    messages,
    users
})

// Send this off to I'm guessing the main app js file?
export default chat