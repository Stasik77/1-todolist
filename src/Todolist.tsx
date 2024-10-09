import React from "react";


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
                <button>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}