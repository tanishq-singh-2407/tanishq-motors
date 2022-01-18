import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Spinner from '../../../components/spinner';
import SideBar from '../../../components/sidebar';
import { useState } from 'react';
import axios from 'axios';
import verifyToken from '../../../lib/verifyToken';
import Cookies from 'universal-cookie';
import type { Invoice } from '../../../lib/invoice';
import InvoiceRes from '../../../components/invoiceRes';

interface user {
    _id: string;
    name: string;
    email: string;
    iat?: number;
}

const Search: NextPage<{ user: user, invoiceData: Invoice }> = ({ user, invoiceData }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [invoiceNumber, setInvoiceNumber] = useState<number>();
    const [isFought, setIsFought] = useState<boolean>(false);
    const [invoice, setInvoice] = useState<Invoice>();
    const cookies = new Cookies();

    const search = async (): Promise<void> => {
        if (!invoiceNumber) return alert("Enter invoice");

        setIsLoading(true);
        try {
            const response = await axios({
                method: "GET",
                url: "/api/invoice",
                headers: {
                    "auth-token": cookies.get("auth-token"),
                    "invoice-number": invoiceNumber.toString()
                }
            });

            const { data } = response;
            if (data.error) alert(data.message[0].message);
            else {
                const invoice_: Invoice = data.data[0];

                if (invoice_ === undefined) {
                    setIsLoading(false);
                    return alert("Invoice Number not found")
                }

                setInvoice(invoice_);
                setIsLoading(false);
                setIsFought(true);
            }
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
    }

    return (
        <div className="min-h-screen h-screen w-screen flex justify-start items-center flex-col">

            <Head>
                <title>Tanishq Motors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SideBar />

            <main className='h-full w-full bg-slate-100'>
                {
                    isFought || invoiceData !== undefined ?
                        <InvoiceRes invoice={invoiceData !== undefined ? invoiceData : invoice!} operation='search' setIsFought={setIsFought} /> :
                        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-w-full">
                            <div className="max-w-md w-full space-y-8">
                                <section className="mt-8 space-y-6">
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div>
                                            <label htmlFor="invoice-number" className="sr-only">
                                                Invoice Number
                                            </label>
                                            <input
                                                id="invoice-number"
                                                name="password"
                                                type="number"
                                                autoComplete="off"
                                                required
                                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Enter Invoice Number"
                                                value={invoiceNumber}
                                                onChange={e => setInvoiceNumber(e.target.valueAsNumber)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={search}
                                        >
                                            {isLoading ? <Spinner /> : "Search"}
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                }
            </main>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    const { cookies } = req;
    const token: string = cookies["auth-token"];

    if (token !== undefined) { // check auth-token
        const { success, data } = verifyToken(token);

        if (success) {
            try {
                if (query.invoice_number) {
                    const response = await axios({
                        method: "GET",
                        url: `${process.env.NEXT_PUBLIC_API}/api/invoice`,
                        headers: {
                            "auth-token": token,
                            "invoice-number": query.invoice_number as string
                        }
                    });

                    const resData = response.data;

                    if (!resData.error) {
                        const invoice_: Invoice = resData.data[0];

                        if (invoice_ !== undefined) {
                            return {
                                props: {
                                    user: data,
                                    invoiceData: invoice_
                                }
                            }
                        }

                    }
                }
            } catch (error) {
            }

            return {
                props: {
                    user: data,

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

export default Search;