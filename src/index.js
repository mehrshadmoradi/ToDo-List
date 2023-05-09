
import { render } from '@testing-library/react';
import { type } from '@testing-library/user-event/dist/type';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useEffect } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));




function App() {

    const Today = () => {
        const d = new Date();
        const Year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const days = ["Sunday", "Monday", "tuesday", "Wednesday", "thursday", "Friday", "Saturday"];
        const weekDayNumber = d.getDay();
        const weekDayName = days[weekDayNumber];


        return Year + "/" + month + "/" + day + " - " + weekDayName;

    }



    return (
        <div>
            <h2 className='header' >plans of day ({Today()})</h2>
            <TodoList />
        </div>
    )

}


root.render(<App />);