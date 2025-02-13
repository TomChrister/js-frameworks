import { Outlet } from 'react-router-dom';

export function Profile() {
    return (
        <>
            <h1>Profile page</h1>
            <Outlet />
        </>
    )
}