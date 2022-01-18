import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { NextPage } from 'next';
import type { Items } from '../lib/invoice';

const FloatingForm: NextPage<{ open: boolean; setOpen: Function; item: Items; setItems: Function }> = ({ open, setOpen, item, setItems }) => {
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-11/12 sm:max-w-5xl sm:w-full">
                            <form action="#" method="POST" className='w-full h-full'>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                    Item Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder='Saarthi Riksha'
                                                    value={item.itemName as string}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].itemName = e.target.value;
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="chassisNo" className="block text-sm font-medium text-gray-700">
                                                    Chassis Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="chassisNo"
                                                    placeholder='M5EHAM...'
                                                    value={item.chassisNo as string}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].chassisNo = e.target.value;
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                                    Amount
                                                </label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    placeholder='1'
                                                    value={Number(item.amount)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].amount = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="EngineNumber" className="block text-sm font-medium text-gray-700">
                                                    Engine Number
                                                </label>
                                                <input
                                                    type="number"
                                                    name="EngineNumber"
                                                    placeholder='1'
                                                    value={Number(item.EngineNumber)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].EngineNumber = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="controllerNumber" className="block text-sm font-medium text-gray-700">
                                                    Controller Number
                                                </label>
                                                <input
                                                    type="number"
                                                    name="controllerNumber"
                                                    placeholder='1'
                                                    value={Number(item.controllerNumber)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1]["controllerNumber"] = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="hoursePower" className="block text-sm font-medium text-gray-700">
                                                    Hourse Power
                                                </label>
                                                <input
                                                    type="text"
                                                    name="hoursePower"
                                                    placeholder='1000 Watt'
                                                    value={item.hoursePower as string}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].hoursePower = e.target.value;
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="bodyColor" className="block text-sm font-medium text-gray-700">
                                                    Body Colour
                                                </label>
                                                <input
                                                    type="text"
                                                    name="bodyColor"
                                                    placeholder='Blue'
                                                    value={item.bodyColor as string}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].bodyColor = e.target.value;
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                                    Quantity
                                                </label>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    placeholder='1'
                                                    value={Number(item.quantity)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].quantity = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="numberOfBatteries" className="block text-sm font-medium text-gray-700">
                                                    Number Of Batteries
                                                </label>
                                                <input
                                                    type="number"
                                                    name="numberOfBatteries"
                                                    placeholder='1'
                                                    value={Number(item.numberOfBatteries)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1]["numberOfBatteries"] = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="unladenWeight" className="block text-sm font-medium text-gray-700">
                                                    Unladen Weight
                                                </label>
                                                <input
                                                    type="number"
                                                    name="unladenWeight"
                                                    placeholder='1'
                                                    value={Number(item.unladenWeight)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1]["unladenWeight"] = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="grossVehicleWeight" className="block text-sm font-medium text-gray-700">
                                                    Gross Vehicle Weight
                                                </label>
                                                <input
                                                    type="number"
                                                    name="grossVehicleWeight"
                                                    placeholder='1'
                                                    value={Number(item.grossVehicleWeight)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1]["grossVehicleWeight"] = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label htmlFor="yearOfManufacture" className="block text-sm font-medium text-gray-700">
                                                    Year Of Manufacture
                                                </label>
                                                <input
                                                    type="text"
                                                    name="yearOfManufacture"
                                                    placeholder='Dec 2022'
                                                    value={item.yearOfManufacture as string}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].yearOfManufacture = e.target.value;
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-1">
                                                <label htmlFor="maximAxleWeight.frontAxle" className="block text-sm font-medium text-gray-700">
                                                    Front Axle
                                                </label>
                                                <input
                                                    type="number"
                                                    name="maximAxleWeight.frontAxle"
                                                    placeholder='1'
                                                    value={Number(item.maximAxleWeight.frontAxle)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].maximAxleWeight.frontAxle = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-1">
                                                <label htmlFor="maximAxleWeight.tandemAxle" className="block text-sm font-medium text-gray-700">
                                                    Tandem Axle
                                                </label>
                                                <input
                                                    type="number"
                                                    name="maximAxleWeight.tandemAxle"
                                                    placeholder='1'
                                                    value={Number(item.maximAxleWeight.tandemAxle)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].maximAxleWeight.tandemAxle = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-1">
                                                <label htmlFor="maximAxleWeight.anyOtherAxle" className="block text-sm font-medium text-gray-700">
                                                    Any Other Axle
                                                </label>
                                                <input
                                                    type="number"
                                                    name="maximAxleWeight.anyOtherAxle"
                                                    placeholder='1'
                                                    value={Number(item.maximAxleWeight.anyOtherAxle)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].maximAxleWeight.anyOtherAxle = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-1">
                                                <label htmlFor="maximAxleWeight.rearAxle" className="block text-sm font-medium text-gray-700">
                                                    Rear Axle
                                                </label>
                                                <input
                                                    type="number"
                                                    name="maximAxleWeight.rearAxle"
                                                    placeholder='1'
                                                    value={Number(item.maximAxleWeight.rearAxle)}
                                                    onChange={e => setItems(
                                                        (oldArr: Array<Items>) => {
                                                            var newArr = [...oldArr];
                                                            newArr[Number(item.serialNumber) - 1].maximAxleWeight.rearAxle = Number(e.target.value);
                                                            return [...newArr];
                                                        }
                                                    )}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => {
                                        setItems(
                                            (oldArr: Array<Items>) => {
                                                var newArr = [...oldArr];
                                                newArr.splice(Number(item.serialNumber) - 1, 1);
                                                return [...newArr];
                                            }
                                        )
                                        setOpen(false);
                                    }}
                                >
                                    Delete Item
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default FloatingForm;