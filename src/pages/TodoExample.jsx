import { useState } from "react"
import useFetch from "./my_custom_hook"

const TodoExample = () => {
    const [todos, setTodos] = useFetch("https://jsonplaceholder.typicode.com/todos/1")
    return (
        <div>
            <h1>All todos:</h1>
            {
                todos.map(
                    (todo) => {
                        return (
                            <p key={todo.id}>{todo.title}</p>
                        )
                    }
                )
            }
        </div>
    )
}
export default TodoExample