import React from "react"
import PropTypes from "prop-types"
import Message from "./Message"

const MessagesList = ({ messages }) => (
    <section id="messages-list">
        <ul>
        {messages.map( message => (
            // So we are using map function to render Messages component
            <Message
                key={message.id} 
                {...message}
            />
        ))}
        </ul>
    </section>
)

// Fancy way of required an array of specific object to be passed as props
MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList