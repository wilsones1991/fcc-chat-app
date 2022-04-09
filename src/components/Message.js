// functional component --> creates input field into the New Message section of page. When enter key is pressed, dispatch AddMEssage action, passing value of input field into

import React from "react"
import PropTypes from "prop-types"

const Message = ({message, author}) => (
    <p>
        <i>{author}</i>: {message}
    </p>
)

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message