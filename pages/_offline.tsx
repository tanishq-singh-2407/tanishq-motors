import type { NextPage } from "next";

const Offline: NextPage = ({ }) => {
    return (
        <div className="h-screen w-screen flex justify-start items-center flex-col bg-slate-100">
            <main className='h-full w-full'>
                <h1>You are offline.</h1>
            </main>
        </div>
    )
}

export default Offline;