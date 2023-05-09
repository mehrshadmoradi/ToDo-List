import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useRef, useState } from 'react';
import { useMemo } from 'react';

function Todo({ todos, setTodos, removeTodo }) {

    // const [checked, setChecked] = useState(false);
    // const ref = useRef();

    // const deactivateTodo = () => {
    //     const darker = ref.current.className.add('darker');
    //     const light = ref.current.className.remove("darker");
    //     return checked ? light : darker;
    // }


    // const addZero = (a) => {
    //     if (a <= 9) { a = '0' + a }
    //     return a;
    // };

    // const currentTime = () => {
    //     const d = new Date();
    //     const hour = addZero(d.getHours());
    //     const minute = addZero(d.getMinutes());
    //     const second = addZero(d.getSeconds());


    //     return hour + ":" + minute + ":" + second
    // };



    return (
        <div>{todos.map((todo) => (
            <div className='todo-container' key={todo.id}>
                <div className="todoDiv" ref={ref}>
                    <ul className='list'>
                        <li className='listItem'>
                            <input type="text" value={todo.text} className='todoInput' readOnly />
                            <button type='button' onClick={() => removeTodo(todo.id)} className='deleteBtn'>Delete</button>
                            <br />
                            {/* <span className='currentTime'>{currentTime()}</span> */}
                            <span><input type="time" className='timePicker' /></span>
                        </li>
                    </ul>
                </div>
                <input type="checkbox" name="" id="" onClick={() => { setChecked(deactivateTodo()) }} />
            </div>
        ))}</div>
    )
}
export default Todo