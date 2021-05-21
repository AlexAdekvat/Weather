import React from "react"

const Form = (props) => {
    return (
        <form onSubmit={props.weather} >
            <input type='text' name='city' placeholder='Город' />
            <button>Sent</button>
        </form>
    )
}

export default Form