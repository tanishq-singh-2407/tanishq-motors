import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Header: NextPage = () => {
    const router = useRouter();

    return (
        <header className='h-20 z-10 w-screen bg-transparent flex justify-center items-center px-10'>
            <nav className='flex justify-center md:justify-start items-center w-full'>
                <span className='font-light text-slate-50 text-lg md:text-xl hover:text-neutral-300 cursor-pointer tracking-wide' onClick={() => router.replace('/')}>TANISHQ MOTORS</span>
            </nav>
        </header>
    );
};

export default Header;