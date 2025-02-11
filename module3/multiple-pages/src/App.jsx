import './App.css'
import { Card } from '../layout/Index.jsx';

function App() {
    return (
        <>
            <h1 className='text-3xl font-bold'>Home path</h1>
            <p>Some header content</p>
            <Card bgColor={'red'} title={'My card'}>
                <p>Content for the card</p>
            </Card>
        </>
    )
}

export default App
