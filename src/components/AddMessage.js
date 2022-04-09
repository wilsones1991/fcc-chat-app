// functional component --> creates input field into the New Message section of page. When enter key is pressed, dispatch AddMEssage action, passing value of input field into

import React from "react"
// Want to look below up later. Is this the less intensive way of doing React-dom?
import PropTypes from "prop-types"

const AddMessage = (props) => {
    let input

    return (
        <section id="new-message">
            <input
                onKeyPress={ (e) => {
                    if (e.key === "Enter") {
                        props.dispatch(input.value, "Me")
                        input.value = ""
                    }
                }}
                type="text" 
                // don't really get this
                ref={ (node) => {
                    input = node
                }} />
        </section>
    )
}

// Not totally sure why this is here but I'm guessing it's because we're expecting to pass in a function to props to generate the user name? Or something else?

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage