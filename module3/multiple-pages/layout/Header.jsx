import { Link } from 'react-router-dom';

export function Header () {
    return (
        <>
            <header>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/about' className='text-blue-500 mx-4'>
                    About
                </Link>
                <Link to='/profile' className='text-blue-500 mx-4'>
                    Profile
                </Link>
            </header>
        </>
    );
}