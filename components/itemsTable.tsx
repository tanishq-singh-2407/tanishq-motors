import { NextPage } from "next";
import { useState } from "react";
import FloatingForm from "./floatingForm";
import type { Items } from '../pages/invoice/acv/create';

const ItemsTable: NextPage<{ items: Items; setItems: Function }> = ({ items, setItems }) => {
    const [open, setOpen] = useState(false);

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{items.serialNumber}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{items.itemName}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    {items.quantity}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {items.amount}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={() => setOpen(state => !state)}>
                    Edit
                </a>

                <FloatingForm open={open} setOpen={setOpen} item={items} setItems={setItems} />
            </td>
        </tr>
    )
}

const ItemsTotal: NextPage<{ items: Array<Items> }> = ({ items }) => {
    var totalQuantity: number = 0;
    var totalAmount: number = 0;

    items.map(({ quantity, amount }) => {
        totalQuantity += Number(quantity);
        totalAmount += Number(amount);
    })

    return (
        <tr className="bg-slate-200">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            CGST(2.5%) : {totalAmount * 2.5 / 100}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    SGST(2.5%) : {totalAmount * 2.5 / 100}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    Items: {totalQuantity}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    TOTAL : {(2 * totalAmount * 2.5 / 100) + totalAmount}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"></td>
        </tr>
    )
}

export default ItemsTable;
export {
    ItemsTotal
}