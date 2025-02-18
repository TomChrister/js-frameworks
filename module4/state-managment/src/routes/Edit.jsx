import { Link } from 'react-router-dom';
import { useStore } from '../store.js';

export function Edit({}) {
    const {todos, removeTodos} = useStore();
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
                        removeTodos(item.id);
                    }}>Delete</button>
                </div>
                ))}
        </>
    )
}