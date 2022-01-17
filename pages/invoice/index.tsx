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

const Login: NextPage<{ user: user; invoices: Array<Invoice> }> = ({ user, invoices }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cookies = new Cookies();
    const Router = useRouter();

    console.log({ user, invoices });

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
    const token: string = cookies["auth-token"] as string;

    if (token !== undefined) { // check auth-token
        const { success, data } = verifyToken(token);

        if (success) { // send latest 5 purchases

            try {
                const response = await axios({
                    method: "POST",
                    url: `${process.env.NEXT_PUBLIC_API}/api/invoice/getsome`,
                    headers: {
                        "auth-token": token
                    }
                });

                const resData = response.data;
                const invoices: Array<Invoice> = resData.data;

                if (!resData.error) {
                    return {
                        props: {
                            user: data,
                            invoices
                        }
                    }
                }


            } catch (error) {
                return {
                    props: {},
                    redirect: {
                        destination: "/",
                        permanent: false
                    }
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

export default Login;