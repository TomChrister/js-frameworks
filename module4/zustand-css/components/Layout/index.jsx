import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <main className='grow'>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}