import { Link } from 'react-router-dom';

export function Header() {
    return (
        <>
            <header className='flex justify-between px-20'>
                <Link to={'/'}>RainyDays</Link>
                <nav className='flex gap-2'>
                    <Link to={'/products'} className='text-blue-500'>Products</Link>
                </nav>
            </header>
        </>
        )
}