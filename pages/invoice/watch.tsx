import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import SideBar from '../../components/sidebar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import verifyToken from '../../lib/verifyToken';
import type { Invoice } from '../../lib/invoice';

interface user {
    _id: string;
    name: string;
    email: string;
    iat?: number;
}

const Watch: NextPage<{ user: user; }> = ({ user }) => {
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

            <main className='h-full w-full'>
                <embed className="form-control h-full w-full" src={""} id="pdf" />
            </main>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    const { cookies } = req;
    const token: string = cookies["auth-token"] as string;

    if (token !== undefined) { // check auth-token
        const { success, data } = verifyToken(token);

        if (success) { // send latest 5 purchases
            return {
                props: {
                    user: data
                }
            }
        }
    }

    return {
        props: {},
        redirect: {
            destination: "/login",
            permanent: false
        }
    }
}

export default Watch;