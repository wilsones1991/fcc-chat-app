import React from "React"
import PropTypes from "prop-types"

const MessagesList = ({ messages }) => (
    <section id="messages-list">
        <ul>
        {messages.map( message => (
            // So we are using map function to render Messages component
            <Messages
                key={message.id} 
                {...message}
            />
        ))}
        </ul>
    </section>
)

// Fancy way of required an array of specific object to be passed as props
MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList