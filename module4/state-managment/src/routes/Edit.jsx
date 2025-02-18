import { Link } from 'react-router-dom';
import { useStore } from '../store.js';

export function Edit({}) {
    const {todos, setTodos} = useStore();
    return(
        <>
            <Link to="/" className="text-blue-500">
                Home
            </Link>
            <h1>Edit page</h1>

            {todos.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                    <p key={item.id}>{item.text}</p>
                    <button className="border-red-500 border w-20" onClick={()=> {
                        setTodos(todos.filter(todo => todo.id !== item.id));
                        console.log(item.id);
                    }}>Delete</button>
                </div>
                ))}
        </>
    )
}