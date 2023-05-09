import * as React from 'react';
import { useState } from 'react';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'

function TodoForm(props) {

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: new Date().getTime(),
            text: input
        })

        setInput("");

    }




    return (
        <div className='todoFormDiv'>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='write your plan'
                    value={input}
                    onChange={handleChange}
                    className='formInput'
                    autoFocus
                />
                <button type='submit' className='formBtn'>Add</button>
            </form>
        </div>
    )

}
export default TodoForm

