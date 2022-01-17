import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Spinner from '../../../components/spinner';
import SideBar from '../../../components/sidebar';
import axios from 'axios';
import verifyToken from '../../../lib/verifyToken';
import Cookies from 'universal-cookie';
import type { Invoice, Items } from '../../../lib/invoice';
import { useEffect, useState } from 'react';
import ItemsTable, { ItemsTotal } from '../../../components/itemsTable';
import joi from 'joi';
import { useRouter } from 'next/router';

const credSchema = joi.object({
    buyersName: joi.string().min(2).max(25).required(),
    invoiceNumber: joi.number().integer().positive().required(),
    fatherName: joi.string().min(2).max(25).required(),
    motherName: joi.string().min(2).max(25).required(),
    phoneNumber: joi.number().integer().required().positive().min(1000000000).max(9999999999),
    aadharNumber: joi.number().integer().required().positive(),
    date: joi.date(),
    deliveryDate: joi.date(),
    hypothecation: joi.string().required(),
    hirePurchase_Lease_Hypothecation: joi.string().required(),
    streetAddress: joi.string().min(5).max(100).required(),
    city: joi.string().required(),
    state: joi.string().required(),
    postalCode: joi.number().integer().required().positive(),
    description: joi.string().max(200).required(),
    items: joi.array().required()
});

const form21_schema = joi.array().items(
    joi.object({
        serialNumber: joi.number().positive().integer().required(),
        itemName: joi.string().max(20).required(),
        quantity: joi.number().positive().integer().required(),
        amount: joi.number().positive().integer().required(),
        EngineNumber: joi.number().positive().integer().required(),
        numberOfBatteries: joi.number().positive().integer().required(),
        unladenWeight: joi.number().positive().integer().required(),
        maximAxleWeight: joi.object({
            frontAxle: joi.number().integer().max(30).required(),
            rearAxle: joi.number().integer().max(30).required(),
            anyOtherAxle: joi.number().integer().max(30).required(),
            tandemAxle: joi.number().integer().max(30).required(),
        }),
        grossVehicleWeight: joi.number().positive().integer().required(),
        controllerNumber: joi.number().positive().integer().required(),
        classOfVechile: joi.string().max(30).required(),
        makersName: joi.string().max(30).required(),
        chassisNo: joi.string().max(30).required(),
        hoursePower: joi.string().max(15).required(),
        fuelUsed: joi.string().max(30).required(),
        yearOfManufacture: joi.string().max(20).required(),
        seatingCapacity: joi.string().max(15).required(),
        bodyColor: joi.string().max(30).required(),
        typeOfBody: joi.string().max(30).required(),
        bharatStage: joi.string().max(40).required(),
        tradeCertificateNumber: joi.string().max(40).required(),
        tankNumber: joi.string().max(30).required(),
        waporizerNumber: joi.string().max(30).required(),
    }).required()
).required()

interface user {
    _id: string;
    name: string;
    email: string;
    iat?: number;
}

const Search: NextPage<{ user: user }> = ({ user }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cred, setCred] = useState<Invoice>({
        buyersName: "",
        fatherName: "",
        motherName: "",
        date: new Date(),
        deliveryDate: new Date(),
        hypothecation: "",
        hirePurchase_Lease_Hypothecation: "Na",
        streetAddress: "",
        city: "Jabalpur",
        state: "Madhya Pradesh",
        description: "",
        items: []
    });
    const [items, setItems] = useState<Array<Items>>([]);
    const Router = useRouter();
    const cookies = new Cookies();

    useEffect(() => {
        setCred(state => {
            return {
                ...state,
                items
            }
        });
    }, [items])

    const submit = async (): Promise<void> => {
        const application = credSchema.validate(cred);
        const form21 = form21_schema.validate(items);

        if (application.error) return alert(application.error.message)
        if (form21.error) return alert(form21.error.message)

        try {
            setIsLoading(true);

            const response = await axios({
                method: "POST",
                url: "/api/invoice",
                headers: {
                    "auth-token": cookies.get("auth-token"),
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({ data: cred })
            });

            const { data } = response;

            if (data.error) alert(data.message[0].message);
            else {
                setIsLoading(false);
                Router.push(`/invoice/acv/search?invoice_number=${data.data.invoiceNumber}`)
            }

        } catch (error) {
            console.error(error)
        }

        setIsLoading(false);
    }

    return (
        <div className="min-h-screen w-screen flex justify-start items-center flex-col">

            <Head>
                <title>Tanishq Motors</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SideBar />

            <main className='h-full w-full bg-slate-100 flex justify-center items-center py-20 flex-col p-4'>
                <section className='sm:max-w-6xl w-full mb-20'>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Buyer's Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete={"off"}
                                        placeholder='Mr. Visian Patel'
                                        value={cred?.buyersName}
                                        onChange={e => setCred(state => { return { ...state, buyersName: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="invoice-number" className="block text-sm font-medium text-gray-700">
                                        Invoice Number
                                    </label>
                                    <input
                                        type="number"
                                        name="invoice-number"
                                        autoComplete={"off"}
                                        placeholder='87'
                                        value={cred?.invoiceNumber}
                                        onChange={e => setCred(state => { return { ...state, invoiceNumber: e.target.valueAsNumber } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="father-name" className="block text-sm font-medium text-gray-700">
                                        Father Name
                                    </label>
                                    <input
                                        type="text"
                                        name="father-name"
                                        autoComplete={"off"}
                                        placeholder='Mr. Visian Patel'
                                        value={cred?.fatherName}
                                        onChange={e => setCred(state => { return { ...state, fatherName: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="mother-name" className="block text-sm font-medium text-gray-700">
                                        Mother Name
                                    </label>
                                    <input
                                        type="text"
                                        name="mother-name"
                                        autoComplete={"off"}
                                        placeholder='Mrs. Arti Patel'
                                        value={cred?.motherName}
                                        onChange={e => setCred(state => { return { ...state, motherName: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        name="phone-number"
                                        autoComplete={"off"}
                                        placeholder='9182736455'
                                        value={cred?.phoneNumber}
                                        onChange={e => setCred(state => { return { ...state, phoneNumber: e.target.valueAsNumber } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">
                                        Aadhar Number
                                    </label>
                                    <input
                                        type="number"
                                        name="aadhar"
                                        placeholder='0000000000000000'
                                        value={cred?.aadharNumber}
                                        onChange={e => setCred(state => { return { ...state, aadharNumber: e.target.valueAsNumber } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={cred?.date.toISOString().split('T')[0]}
                                        onChange={e => setCred(state => { return { ...state, date: new Date(e.target.value) } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="date-delivered" className="block text-sm font-medium text-gray-700">
                                        Delivered On
                                    </label>
                                    <input
                                        type="date"
                                        name="date-delivered"
                                        value={cred?.deliveryDate.toISOString().split('T')[0]}
                                        onChange={e => setCred(state => { return { ...state, deliveryDate: new Date(e.target.value) } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="hypothecation" className="block text-sm font-medium text-gray-700">
                                        Hypothecation
                                    </label>
                                    <input
                                        type="text"
                                        name="hypothecation"
                                        placeholder='State Bank Of India'
                                        value={cred?.hypothecation}
                                        onChange={e => setCred(state => { return { ...state, hypothecation: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="hypothecation-with" className="block text-sm font-medium text-gray-700">
                                        Hire purchase / lease / Hypothecation with
                                    </label>
                                    <input
                                        type="text"
                                        name="hypothecation-with"
                                        placeholder='Na'
                                        value={cred?.hirePurchase_Lease_Hypothecation}
                                        onChange={e => setCred(state => { return { ...state, hirePurchase_Lease_Hypothecation: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        autoComplete={"off"}
                                        placeholder='House no. 725, Ramnagar Rampur'
                                        value={cred?.description as string}
                                        onChange={e => setCred(state => { return { ...state, description: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                        Street address
                                    </label>
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete={"off"}
                                        placeholder='House no. 725, Ramnagar Rampur'
                                        value={cred?.streetAddress}
                                        onChange={e => setCred(state => { return { ...state, streetAddress: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="off"
                                        placeholder='Jabalpur'
                                        value={cred?.city}
                                        onChange={e => setCred(state => { return { ...state, city: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State / Province
                                    </label>
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        placeholder='Madhya Pradesh'
                                        value={cred?.state}
                                        onChange={e => setCred(state => { return { ...state, state: e.target.value } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                        ZIP / Postal code
                                    </label>
                                    <input
                                        type="number"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        placeholder='110055'
                                        value={cred?.postalCode}
                                        onChange={e => setCred(state => { return { ...state, postalCode: e.target.valueAsNumber } })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="shadow overflow-y-hidden border-b border-gray-200 sm:rounded-lg w-full sm:max-w-6xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Serial Number
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Amount
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {items.map((items, index) => (
                                <ItemsTable items={items} key={index} setItems={setItems} />
                            ))}
                            <ItemsTotal items={items} />
                        </tbody>
                    </table>

                    <div className='flex w-full bg-gray-50 justify-between'>
                        <div className="px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                onClick={submit}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {isLoading ? <Spinner /> : "Submit"}
                            </button>
                        </div>

                        <div className="px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                onClick={() => {
                                    setItems(state => [...state,
                                    {
                                        serialNumber: state.length + 1,
                                        itemName: "Saarthi Riksha",
                                        quantity: 1,
                                        amount: 150380,
                                        classOfVechile: "Electric Vehicle",
                                        makersName: "M/S Champion Poly Plast",
                                        chassisNo: "",
                                        EngineNumber: 0,
                                        hoursePower: "",
                                        fuelUsed: "Batteries",
                                        numberOfBatteries: 4,
                                        yearOfManufacture: "",
                                        seatingCapacity: "4 + 1",
                                        unladenWeight: 0,
                                        maximAxleWeight: {
                                            anyOtherAxle: 1,
                                            frontAxle: 2,
                                            rearAxle: 0,
                                            tandemAxle: 0
                                        },
                                        bodyColor: "",
                                        grossVehicleWeight: 0,
                                        typeOfBody: "Iron",
                                        bharatStage: "IV/VI/Bharat (Terms) Stage III/IIIA etc",
                                        tradeCertificateNumber: "MP20B/TC/JBP-386/2021",
                                        tankNumber: "Na",
                                        waporizerNumber: "Na",
                                        controllerNumber: 0
                                    }
                                    ])
                                }}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add New Item
                            </button>
                        </div>
                    </div>
                </div>
            </main>

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
                    user: data
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

export type {
    Items
}