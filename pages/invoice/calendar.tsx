import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Spinner from '../../components/spinner';
import SideBar from '../../components/sidebar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import Cookies from 'universal-cookie';
import verifyToken from '../../lib/verifyToken';
import type { Invoice } from '../../lib/invoice';

const Calendar: NextPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cookies = new Cookies();
    const Router = useRouter();

    return (
        <div className="h-screen w-screen flex justify-start items-center flex-col">

            <Head>
                <title>Tanishq Motors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SideBar />

            <main className='h-full w-full'></main>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const { cookies } = req;
    const token: string = cookies["auth-token"];

    if (token !== undefined) { // check auth-token
        const { success, data } = verifyToken(token);

        if (success) {
            return {
                props: {
                    data
                }
            }
        }
    }

    return {
        props: {},
        redirect: {
            permanent: false,
            destination: "/login"
        }
    }
}

export default Calendar;