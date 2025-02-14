import { Link } from 'react-router-dom';

export function Layout({ children }) {
  return (
    <>
      <header className="flex gap-4 bg-neutral-400">
        <Link to='/' className="hover:cursor-pointer hover:text-amber-300">
          Home
        </Link>
      </header>
      <main className="grow">{children}</main>
      <footer className='flex justify-center pt-20'>© 2025 FED Oslo</footer>
    </>
  );
}
