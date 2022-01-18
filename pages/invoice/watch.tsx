import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import verifyToken from '../../lib/verifyToken';

const Watch: NextPage<{ pdf?: Buffer }> = ({ pdf }) => {
    return (
        <div className="h-screen w-screen flex justify-start items-center flex-col">

            <Head>
                <title>Tanishq Motors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='h-full w-full'>
                <embed className="form-control h-full w-full" src={`data:application/pdf;base64,${pdf}`} id="pdf" />
            </main>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    const { cookies } = req;
    const token: string = cookies["auth-token"] as string;

    const convertToPdfBuffer = async (html: string): Promise<{ error: boolean; data?: any; }> => {
        try {
            const response = await axios({
                method: "POST",
                url: `${process.env.AWS_API}/create-pdf`,
                data: {
                    html
                }
            });

            const { data } = response;

            return { error: false, data }

        } catch (error) {
            return { error: true }
        }
    }

    if (token !== undefined) { // check auth-token
        const { success, data } = verifyToken(token);

        if (success) { // send latest 5 purchases

            try {

                const { _id, item, type } = query;

                if (_id === undefined) throw "";


                if (type === "invoice") {
                    const response = await axios({
                        method: "GET",
                        url: `${process.env.NEXT_PUBLIC_API}/api/invoice/download/application?_id=${_id}`,
                        headers: {
                            "auth-token": token
                        }
                    });

                    const { data } = response;
                    const { error, html } = data;

                    if (error) throw "";

                    const pdfResponse = await convertToPdfBuffer(html);

                    if (pdfResponse.error) throw "";

                    return {
                        props: {
                            pdf: pdfResponse.data
                        }
                    }

                } else if (type === "form21" && item !== undefined) {
                    const response = await axios({
                        method: "GET",
                        url: `${process.env.NEXT_PUBLIC_API}/api/invoice/download/form21?_id=${_id}&item=${item}`,
                        headers: {
                            "auth-token": token
                        }
                    });

                    const { data } = response;
                    const { error, html } = data;

                    if (error) throw "";

                    const pdfResponse = await convertToPdfBuffer(html);

                    if (pdfResponse.error) throw "";

                    return {
                        props: {
                            pdf: pdfResponse.data
                        }
                    }
                } else throw "";


            } catch (error) {
                return {
                    props: {},
                    redirect: {
                        destination: query.invoice_number ? `/invoice/acv/search?invoice_number=${query.invoice_number}` : `/invoice/acv/search`,
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