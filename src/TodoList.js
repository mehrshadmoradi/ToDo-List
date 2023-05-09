import React, { useState } from 'react'
import { useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {


    const [todos, setTodos] = useState([]);


    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodo = [todo, ...todos];

        setTodos(newTodo);

    }


    const removeTodo = (id) => {
        const remove = [...todos].filter(todo => todo.id !== id);

        setTodos(remove);
    };


    return (
        <>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                removeTodo={removeTodo}
            />
        </>

    )
}

export default TodoList



