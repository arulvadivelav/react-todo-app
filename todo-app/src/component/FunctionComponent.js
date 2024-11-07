import { useState } from "react"
import '../FunctionComponent.css'

function TodoList() {

    const [todos, setTodos] = useState([])
    const [inputvalue, setInputValue] = useState("")

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(inputvalue !== ''){
        setTodos([...todos, inputvalue])
        setInputValue('')
        }
    }

    const handleDelete = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className="todo">
            <div className="todo-form">
                <div className="form-header">
                    <h1 className="">ToDo List</h1>
                </div>
                <div className="form-container">
                    <div className="form-field-1">
                        <form className="">
                            <input 
                                className="" 
                                type="text" 
                                value={inputvalue} 
                                onChange={handleChange} 
                                placeholder="Enter the task details">
                            </input>
                            <button className="btn btn-primary" onClick={handleSubmit}>Add ToDo</button>
                        </form>
                    </div>
                    <div className="form-field-2">
                        <ul>
                            {
                                todos.map((todo, index) => (
                                    <li className="" key={index}>{todo}
                                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {TodoList}