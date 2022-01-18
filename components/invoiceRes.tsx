import { ExclamationIcon } from "@heroicons/react/outline";
import axios from "axios";
import Joi from "joi";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from "universal-cookie";
import { Invoice, UpdateInvoice } from "../lib/invoice";
import Alert from "./alert";
import Spinner from "./spinner";
import { sign } from "jsonwebtoken";

const updateSchema = Joi.object({
    city: Joi.string().min(1).max(20).required(),
    deliveryDate: Joi.date().required(),
    state: Joi.string().min(1).max(20).required(),
    streetAddress: Joi.string().min(1).max(100).required(),
    phoneNumber: Joi.number().integer().positive().required(),
    postalCode: Joi.number().integer().positive().required()
});

const InvoiceRes: NextPage<{ invoice: Invoice; operation: "search" | "update" | "create" | "delete"; setIsFought: Function; }> = ({ invoice, operation, setIsFought }) => {
    const [deleteAlert, setDeleteAlert] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [updateData, setUpdateData] = useState<UpdateInvoice>({
        city: invoice.city,
        deliveryDate: invoice.deliveryDate,
        state: invoice.state,
        streetAddress: invoice.streetAddress,
        phoneNumber: invoice.phoneNumber,
        postalCode: invoice.postalCode
    });
    const Router = useRouter();
    const cookies = new Cookies();

    return (
        <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-w-full flex-col'>
            <div className="min-h-full w-full bg-white shadow-lg overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Invoice Number: {invoice.invoiceNumber || ""}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href={`/invoice/acv/${operation}`}>
                            <span
                                onClick={() => setIsFought(false)}
                                className="ml-5 cursor-pointer group relative w-36 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {operation[0].toUpperCase() + operation.slice(1).toLowerCase()} {operation === "create" ? "new" : "Other"}
                            </span>
                        </Link>
                        {
                            operation === "search" ?
                                <Link href={`/invoice/acv/update?invoice_number=${invoice.invoiceNumber}`}>
                                    <button
                                        type="submit"
                                        className="ml-5 cursor-pointer group relative w-36 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    // onClick={() => setIsFought(false)}
                                    >
                                        Update
                                    </button>
                                </Link> : null
                        }
                        {
                            operation !== "create" ?
                                <button
                                    type="submit"
                                    className="ml-5 cursor-pointer group relative w-36 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-500"
                                    onClick={() => setDeleteAlert(state => !state)}
                                >
                                    DELETE
                                </button> : null
                        }

                        <Alert
                            open={deleteAlert}
                            setOpen={setDeleteAlert}
                            description="Are you sure you want to delete this invoice? All of this data will be permanently removed. This action cannot be undone."
                            logo={<ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />}
                            onConfirm={async () => {
                                const response = await axios({
                                    method: "DELETE",
                                    url: "/api/invoice",
                                    headers: {
                                        "auth-token": cookies.get("auth-token"),
                                        "invoice-number": invoice.invoiceNumber?.toString() || "-1"
                                    }
                                });

                                const data = response.data;
                                if (data.error) return alert(data.message[0].message)
                                else {
                                    alert("deleted")
                                    Router.push("/")
                                }
                            }}
                            title="Delete Invoice"
                            buttonName="Delete"
                        />
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{invoice.buyersName || ""}</dd>
                        </div>


                        {/* change */}
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Mobile No.</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {operation === "update" ?
                                    <div className="col-span-6 sm:col-span-2">
                                        <input
                                            type="number"
                                            name="name"
                                            placeholder='9182736455'
                                            value={updateData.phoneNumber}
                                            onChange={e => setUpdateData(state => { return { ...state, phoneNumber: e.target.valueAsNumber } })}
                                            className="mt-1 block w-full sm:text-sm border-none outline-none bg-gray-100 rounded-md"
                                        />
                                    </div>
                                    : (invoice.phoneNumber || "")}
                            </dd>
                        </div>


                        {/* change */}
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Postal Code</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {operation === "update" ?
                                    <div className="col-span-6 sm:col-span-2">
                                        <input
                                            type="number"
                                            name="name"
                                            placeholder='110088'
                                            value={updateData.postalCode}
                                            onChange={e => setUpdateData(state => { return { ...state, postalCode: e.target.valueAsNumber } })}
                                            className="mt-1 block w-full sm:text-sm border-none outline-none bg-gray-100 rounded-md"
                                        />
                                    </div>
                                    : (invoice.postalCode || "")}
                            </dd>
                        </div>

                        {/* change */}
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Street Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {operation === "update" ?
                                    <div className="col-span-6 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder='House No. 23, Rampur Ramnagar'
                                            value={updateData.streetAddress}
                                            onChange={e => setUpdateData(state => { return { ...state, streetAddress: e.target.value } })}
                                            className="mt-1 block w-full sm:text-sm border-none outline-none bg-gray-100 rounded-md"
                                        />
                                    </div>
                                    : (invoice.streetAddress || "")}
                            </dd>
                        </div>

                        {/* change */}
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">City</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {operation === "update" ?
                                    <div className="col-span-6 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder='Jabalpur'
                                            value={updateData.city}
                                            onChange={e => setUpdateData(state => { return { ...state, city: e.target.value } })}
                                            className="mt-1 block w-full sm:text-sm border-none outline-none bg-gray-100 rounded-md"
                                        />
                                    </div>
                                    : (invoice.city || "")}
                            </dd>
                        </div>

                        {/* change */}
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">State</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {operation === "update" ?
                                    <div className="col-span-6 sm:col-span-2">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder='Madhya Pradesh'
                                            value={updateData.state}
                                            onChange={e => setUpdateData(state_ => { return { ...state_, state: e.target.value } })}
                                            className="mt-1 block w-full sm:text-sm border-none outline-none bg-gray-100 rounded-md"
                                        />
                                    </div>
                                    : (invoice.state || "")}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Date of application</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{new Date(invoice.date || "").toDateString() || ""}</dd>
                        </div>


                        {/* change */}
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Date of Delivery</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {operation === "update" ?
                                    <div className="col-span-6 sm:col-span-2">
                                        <input
                                            type="date"
                                            name="name"
                                            value={new Date(updateData.deliveryDate || "").toISOString().split('T')[0]}
                                            onChange={e => setUpdateData(state => { return { ...state, deliveryDate: new Date(e.target.value) } })}
                                            className="mt-1 block w-full sm:text-sm border-none outline-none bg-gray-100 rounded-md"
                                        />
                                    </div>
                                    : (new Date(invoice.deliveryDate || "").toDateString() || "")}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{invoice.description || ""}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Hypothecation</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{invoice.hypothecation || ""}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="ml-2 flex-1 w-0 truncate">invoice.pdf</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href={`/invoice/watch?_id=${invoice._id}&type=invoice&invoice_number=${invoice.invoiceNumber}`} target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                    {invoice.items.map(({ itemName }, index) => {
                                        return (
                                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm" key={index}>
                                                <div className="w-0 flex-1 flex items-center">
                                                    <span className="ml-2 flex-1 w-0 truncate">{itemName}_Form_21.pdf</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a href={`/invoice/watch?_id=${invoice._id}&item=${index}&type=form21&invoice_number=${invoice.invoiceNumber}`} target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                        )
                                    })

                                    }
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
                {
                    operation === "update" ?
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                onClick={async () => {
                                    const check = updateSchema.validate(updateData);

                                    if (check.error) return alert(check.error.message)

                                    try {
                                        setIsLoading(true);

                                        const response = await axios({
                                            method: "PUT",
                                            url: "/api/invoice",
                                            headers: {
                                                "auth-token": cookies.get("auth-token"),
                                                "invoice-number": invoice.invoiceNumber?.toString() || "-1"
                                            },
                                            data: {
                                                "updated-invoice": updateData
                                            }
                                        });

                                        const { data } = response;
                                        if (data.error) alert(data.message[0].message);
                                        else {
                                            setIsLoading(false);
                                            Router.push(`/invoice/acv/search?invoice_number=${invoice.invoiceNumber}`)
                                        }

                                    } catch (error) { }

                                    setIsLoading(false);
                                }}
                                className="mt-3 hover:bg-blue-700 hover:text-slate-50 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                {isLoading ? <Spinner /> : "Save"}
                            </button>
                        </div> : null
                }
            </div >

            {
                operation === "update" ? null :
                    <div className="w-full flex flex-col mt-10">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Serial No.
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
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {invoice.items.map(({ serialNumber, itemName, chassisNo, quantity, amount }, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex-shrink-0 h-10 w-10 text-sm text-gray-500">
                                                            {serialNumber || ""}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{itemName || ""}</div>
                                                        <div className="text-sm text-gray-500">{chassisNo || ""}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {quantity || ""}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {amount || ""}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}

export default InvoiceRes;