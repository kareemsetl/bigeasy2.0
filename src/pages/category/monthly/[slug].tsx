import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Thumbnail from '~/components/Thumbnail';


const MonthlyEditions = () => {
    const router = useRouter();
    const slug = router.asPath.split('/').pop() ?? "404";

    const { data: thumbnail, isLoading, error } = api.post.getPostThumbnailBySlug.useQuery({ slug });
    const { data: titles } = api.post.getPostTitlesBySlug.useQuery({ slug });

    if (isLoading) return <div>Loading...</div>;

    if (!titles) return <div>No posts!</div>;

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
                            <h1 className="ml-3 text-xl"> {slug.replace(/-/g, ' ')} Edition</h1>
                            <table className="w-full border">
                                <tbody className="border-x">
                                    {titles?.map((post) => (
                                        <tr key={post.id} className="border-slate-400">
                                            <td className="" dangerouslySetInnerHTML={{ __html: post.postContent }}></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                            {thumbnail?.map((item) => (
                                <Thumbnail key={item.post_id} thumbnail={item} />
                            ))}
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

export default MonthlyEditions;