import React from "react";
import {Button} from "./Button";


type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number,
    title: string,
    IsDone: boolean,
}

export function TodoList(props: TodoListPropsType) {




    const tasksList: Array<JSX.Element> = props.tasks.map((task: TaskType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.IsDone}/>
                <span>{task.title}</span>
            </li>
        )


    });


    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Button title="+"/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button title="All"/>
                <Button title="Active"/>
                <Button title="Completed"/>
            </div>
        </div>
    )


    
}