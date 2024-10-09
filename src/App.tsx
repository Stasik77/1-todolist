import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./Todolist";

function App() {

    // BLL - busnes logig loayr


    const todoListTitle_1 = "What to lern";
    const todoListTitle_2 = "What to buy";
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "Html", IsDone: true},
        {id: 2, title: "Css", IsDone: true},
        {id: 3, title: "Js", IsDone: true},

    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "cola", IsDone: true},
        {id: 5, title: "whiski", IsDone: true},
        {id: 6, title: "ice", IsDone: true},

    ]




    //  - user interface

    return (



    <div className="App">
        <TodoList title={todoListTitle_1} tasks={tasks_1}/>
        {/*<TodoList(title: todoListTitle_1)/>*/}
        <TodoList title={todoListTitle_2} tasks={tasks_2}/>



    </div>
)
    ;
}

export default App;
