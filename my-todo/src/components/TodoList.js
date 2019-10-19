//step 2
import React, {useReducer} from "react";
import {reducer, todo} from "../reducers/reducer";
import {Todo} from "./Todo";
import {TodoForm} from "./TodoForm";

export const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, todo);

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                        />
            })}
        </div>
    )
}
