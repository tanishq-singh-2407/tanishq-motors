import type { NextPage } from 'next';
import Link from 'next/link';

import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    RefreshIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FC } from 'react';

type Solutions = {
    name: string;
    href: string;
    icon: FC | any;
}

type Resourses = {
    name: string;
    href: string;
    icon: FC | any;
}

const solutions: Array<Solutions> = [
    {
        name: 'Create New Invoice',
        href: '/invoice/acv/create',
        icon: ChartBarIcon,
    },
    {
        name: 'Search Invoice',
        href: '/invoice/acv/search',
        icon: CursorClickIcon,
    },
    {
        name: 'Update Invoice',
        href: '/invoice/acv/update',
        icon: ViewGridIcon,
    }
]
const resources: Array<Resourses> = [
    {
        name: 'History',
        href: '/invoice',
        icon: SupportIcon,
    },
    {
        name: 'Calendar',
        href: '/invoice/calendar',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Profile',
        href: '/settings',
        icon: CalendarIcon,
    }
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const SideBar: NextPage = () => {
    return (
        <Popover className="relative bg-white h-20 w-full">
            <div className="w-full mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href={'/'}>
                            <span className='cursor-pointer'>
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                            </span>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Invoice</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        // as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {solutions.map((item) => (
                                                        <Link href={item.href} key={item.name}>
                                                            <span
                                                                key={item.name}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                                                            >
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                </div>
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        {resources.map((item) => (
                            <Link href={item.href} key={item.name}>
                                <span
                                    key={item.name}
                                    className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                                >
                                    {item.name}
                                </span>
                            </Link>
                        ))}


                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <div className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium">
                            <span className='hidden'>
                                something
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Transition
                // as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <Link href={item.href} key={item.name}>
                                            <span
                                                key={item.name}

                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
                                            >
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {resources.map((item) => (
                                    <Link href={item.href} key={item.name}>
                                        <span
                                            key={item.name}

                                            className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default SideBar;
export type {
    Solutions,
    Resourses
};