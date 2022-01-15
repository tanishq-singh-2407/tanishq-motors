import type { NextPage } from 'next';

const Footer: NextPage = () => {
    return (
        <footer className='h-20 z-10 w-screen bg-transparent flex justify-center items-center px-10'>
            <nav className='flex justify-center items-start sm:items-center w-full h-full flex-col'>
                {/* <span className='text-sm md:text-base font-light text-slate-50 hover:text-neutral-300 cursor-pointer'>CONTACT US</span> */}
                <span className='text-sm md:text-base font-light text-slate-50 hover:text-neutral-300 cursor-pointer'>Copyright © 2021 | All rights reserved</span>
            </nav>
        </footer>
    );
};

export default Footer;