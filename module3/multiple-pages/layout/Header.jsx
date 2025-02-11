import { Link } from 'react-router-dom';

export function Header () {
    return (
        <>
            <header>
                <a href="/about" className='text-blue-500 mx-4'>
                    About tag
                </a>
                <Link to='/about' className='text-blue-500 mx-4'>
                    About link
                </Link>
            </header>
        </>
    );
}