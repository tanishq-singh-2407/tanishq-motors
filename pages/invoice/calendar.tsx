import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import SideBar from '../../components/sidebar';
import verifyToken from '../../lib/verifyToken';

const Calendar: NextPage = () => {
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