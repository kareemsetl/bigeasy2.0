import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import ClientPageRender from "~/components/ClientPageRender"
import { useRouter } from 'next/router'

const Categories = () => {
    const router = useRouter();
    const slug = router.asPath.split('/').pop() ?? "404";

    return (
        <>
            <Head>
                <title>Big Easy Magazine</title>
                <meta name="description" content="All of the big easy mag content you know and love" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex justify-center h-full mt-20 p-2">
                <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
                    maxWidth: '1460px',
                    marginTop: '255px',
                    padding: '20px'
                }}>
                    <div className="flex">
                        <div className="w-2/3 float left">
                        <h1 className="mb-5 ml-3 text-xl"> Category: {slug.replace(/-/g, ' ').replace(/#/g, '')} </h1>
                            <ClientPageRender />
                        </div>
                        {/* Second Column for Additional Content */}
                        <div className="w-1/3 float-left">
                            <h1 className="mb-5 ml-3 text-xl"> Ad Space </h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Categories;
