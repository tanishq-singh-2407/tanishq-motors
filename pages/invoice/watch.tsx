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

const Watch: NextPage<{ user: user; pdf?: any }> = ({ user, pdf }) => {
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
                <embed className="form-control h-full w-full" src={`data:application/pdf;base64,${pdf}`} id="pdf" />
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

            try {
                const response = await axios({
                    method: "GET",
                    url: `http://localhost:3000/api/invoice/download/application?_id=61e57f2dd5dfca3db5843510&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJsaW1pdGVkIiwiaWF0IjoxNjQyNDkxNjY4LCJleHAiOjE2NDI0OTUyNjh9.sb2Z_QCMXK2Hs6QQaV1aeJ0-8XLkdUTlbHAX9dIF1DU`,
                });

                const resData = response.data;
                const pdf: any = resData;

                if (!resData.error) {
                    return {
                        props: {
                            user: data,
                            pdf
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

export default Watch;