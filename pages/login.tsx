import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Spinner from '../components/spinner';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import Cookies from 'universal-cookie';
import verifyToken from '../lib/verifyToken';

type Credentials = { email: string; password: string };

const Login: NextPage = () => {
    const [form, setForm] = useState<0 | 1>(0);
    const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cookies = new Cookies();
    const Router = useRouter();

    useEffect(() => {
        cookies.remove("auth-token");
    }, []);

    const checkEmail = async () => {
        if (!isEmail(credentials.email)) return alert("Enter a proper email address.");
        setIsLoading(true);

        try {
            const response = await axios({
                method: "POST",
                url: "/api/auth/verifyemail",
                headers: {
                    email: credentials.email
                }
            });

            if (response.data.valid) {
                setForm(1);
                setIsLoading(false);
            }

            else {
                setIsLoading(false);
                return alert("Enter a valid email address");
            }

        } catch (error) {
            console.error(error)
        }

        setIsLoading(false);
    }

    const checkPassAndlogin = async (): Promise<void> => {
        if (credentials.password.length < 8) return alert("Invalid Password");
        setIsLoading(true);

        try {
            const response = await axios({
                method: "POST",
                url: "/api/auth/login",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });

            if (response.data.error) alert(response.data.message[0].message);
            else {
                cookies.set("auth-token", response.data.token);
                setIsLoading(false);
                Router.replace('/');
            }


        } catch (error) {
            console.error(error)
        }

        setIsLoading(false);
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-black">

            <Head>
                <title>Tanishq Motors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className='h-5/6 w-screen z-10 flex justify-center items-center'>
                <section className={`${!form ? "h-44" : "h-80"} w-5/6 ${!form ? "sm:h-28" : "sm:h-52"} md:max-w-2xl flex justify-center items-center flex-col`}>
                    <section className={`${!form ? "h-full" : "h-1/3 sm:h-full"} w-full flex justify-center items-center flex-col sm:flex-row p-2`}>
                        <input type="text" value={credentials.email} onChange={e => setCredentials(state => { return { ...state, email: e.target.value } })} className={`${!form ? "h-1/2" : "h-full"} w-full ${!form ? "mb-3" : ""} max-h-20 sm:mb-0 text-center sm:text-left sm:h-full ${!form ? "sm:w-9/12" : "sm:w-full"} text-slate-50 border-2 border-slate-50 text-lg md:text-xl bg-transparent outline-none sm:mr-2 placeholder:text-slate-50 font-extralight p-3 ${!form ? null : "pointer-events-none"} `} placeholder="Enter your email." />
                        {
                            !form ?
                                isLoading ?
                                    <div className='h-1/2 w-full sm:h-full sm:w-3/12 sm:ml-1 border-2 border-slate-500 flex justify-center items-center'>
                                        <Spinner />
                                    </div>
                                    : <button type="submit" className='h-1/2 w-full sm:h-full sm:w-3/12 sm:ml-1 bg-[#FFF856] text-black text-lg md:text-xl font-medium' onClick={checkEmail}>NEXT</button>
                                : null
                        }
                    </section>
                    {
                        form === 1 ?
                            <section className={`${!form ? "h-full" : "h-2/3 sm:h-full"} w-full flex justify-center items-center flex-col sm:flex-row p-2`}>
                                <input type="password" value={credentials.password} onChange={e => setCredentials(state => { return { ...state, password: e.target.value } })} className='h-1/2 w-full max-h-20 mb-3 sm:mb-0 text-center sm:text-left sm:h-full sm:w-9/12 text-slate-50 border-2 border-slate-50 text-lg md:text-xl bg-transparent outline-none sm:mr-2 placeholder:text-slate-50 font-extralight p-3' placeholder="Enter your password." />
                                {
                                    isLoading ?
                                        <div className='h-1/2 w-full max-h-20 sm:h-full sm:w-3/12 sm:ml-1 border-2 border-slate-500 flex justify-center items-center'>
                                            <Spinner />
                                        </div> :
                                        <button type="submit" className='h-1/2 w-full max-h-20 sm:h-full sm:w-3/12 sm:ml-1 bg-[#FFF856] text-black text-lg md:text-xl font-medium' onClick={checkPassAndlogin}>LOGIN</button>
                                }
                            </section> : null
                    }
                    <section className='mt-2 w-full flex justify-center items-center'>
                        <button className='text-slate-50 font-thin text-base md:text-lg' onClick={() => Router.push('/register')}>don't have a account? register!</button>
                    </section>
                </section>
            </main>

            <Footer />

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