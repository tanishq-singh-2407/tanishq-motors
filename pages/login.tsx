import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Spinner from '../components/spinner';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import Cookies from 'universal-cookie';
import verifyToken from '../lib/verifyToken';
import Link from 'next/link';

type Credentials = {
    email: string;
    password: string;
};

const Login: NextPage<{}> = ({ }) => {
    const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cookies = new Cookies();
    const Router = useRouter();

    useEffect(() => {
        cookies.remove("auth-token");
    }, []);

    const checkPassAndlogin = async (): Promise<void> => {
        if (!isEmail(credentials.email)) return alert("Enter a proper email address.");
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
            const { data } = response;

            if (response.data.error) alert(response.data.message[0].message);
            else {
                cookies.set("auth-token", response.data.token, { secure: true });
                setIsLoading(false);
                Router.replace('/');
            }


        } catch (error) {
            console.error(error)
        }

        setIsLoading(false);
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center flex-col bg-gray-50">

            <Head>
                <title>Tanishq Motors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='h-screen w-screen z-10 flex justify-center items-center'>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">T A N I S H Q - M O T O R S</h2>
                        </div>
                        <section className="mt-8 space-y-6">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                        value={credentials.email}
                                        onChange={e => setCredentials(state => { return { ...state, email: e.target.value } })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        value={credentials.password}
                                        onChange={e => setCredentials(state => { return { ...state, password: e.target.value } })}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link href={'/register'}>
                                        <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer pointer-events-none">
                                            Don&apos;t have a account? Register
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={checkPassAndlogin}
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                                    </span>
                                    {isLoading ? <Spinner /> : "Sign in"}
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
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