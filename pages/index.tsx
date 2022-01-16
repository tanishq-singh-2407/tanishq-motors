import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Cookies from 'universal-cookie';
import verifyToken from '../lib/verifyToken';
import SideBar from '../components/sidebar';

interface user {
  _id: string;
  name: string;
  email: string;
  iat?: number;
}

const Home: NextPage<{ data: user }> = ({ data }) => {
  const cookies = new Cookies();

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

export default Home;