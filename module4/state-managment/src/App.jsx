import { useStore } from './store.js';
import { Link } from 'react-router-dom';
import "./App.css";

function App() {
    const {todos, setTodos} = useStore();
    return (
        <>
            <Link to="/edit" className="text-blue-500">
                Edit
            </Link>
            <div className="flex flex-col gap-2">
                <h1 className="text-amber-500 font-bold text-2xl"> Todos</h1>
                <form
                    action=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(document.querySelector("#todo-input").value);
                        const inputText = document.querySelector("#todo-input").value;
                        setTodos([
                            ...todos,
                            {
                                id: todos[todos.length - 1].id + 1,
                                text: inputText
                            },
                        ]);
                        console.log(todos);
                    }}
                >
                    <label htmlFor="todo-input">Todo item</label>
                    <input type="text" id="todo-input" name="todo-input" className="border block"/>
                    <button type="submit" className="border rounded p-1">
                        Add
                    </button>
                </form>
                <div className="this will be our container for todo items">
                    {todos.map((item) => (
                        <div  key={item.id}>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
