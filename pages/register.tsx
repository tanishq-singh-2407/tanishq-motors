import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import verifyToken from '../lib/verifyToken';

type Credentials = { name: string; email: string; password: string };

const Login: NextPage = () => {
    const [form, setForm] = useState<0 | 1>(0);
    const [credentials, setCredentials] = useState<Credentials>({ name: "", email: "", password: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cookies = new Cookies();
    const Router = useRouter();

    useEffect(() => {
        cookies.remove("auth-token");
    }, []);

    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col">

            <Head>
                <title>Tanishq Motors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='h-full w-full'></main>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const { cookies } = req;
    const token: string = cookies["auth-token"] as string;

    if (token !== undefined) { // check auth-token
        const { success, data } = verifyToken(token);

        if (success) {
            return {
                props: {
                    data
                },
                redirect: {
                    permanent: false,
                    destination: "/"
                }
            }
        }
    }

    return {
        props: {}
    }
}

export default Login;