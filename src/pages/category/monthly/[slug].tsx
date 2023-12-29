import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';


const MonthlyEditions = () => {
    const router = useRouter();
    const slug = router.asPath.split('/').pop() || "404";
    const { data, isLoading, error } = api.post.getPostTitlesBySlug.useQuery({ slug });


    if (isLoading) return <div>Loading...</div>;

    if (!data) return <div>No posts!</div>;

    return (
        <>
            <Head>
                <title>Big Easy Magazine</title>
                <meta name="description" content="All of the big easy mag content you know and love" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex justify-center h-full mt-20">
                <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
                    maxWidth: '1460px',
                    marginTop: '275px'
                }}>
                    <h1> {slug.replace(/-/g, ' ')} Edition</h1>
                    <table className="w-full border">
                        <tbody className="border">
                            {data.map((post, index) => (
                                <tr key={post.id} className="border-slate-400">
                                    <td className="">{index + 1}. {post.postTitle}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default MonthlyEditions;
