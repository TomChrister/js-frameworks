import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Card } from '../components/Card.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export { Header, Footer, Card,  Layout };