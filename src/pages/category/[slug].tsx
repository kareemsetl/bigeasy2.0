import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Thumbnail from "~/components/Thumbnail";
import { postRouter } from '~/server/api/routers/post';


const Categories = () => {
    const router = useRouter();
    let slug = router.asPath.split('/').pop() ?? "404";
    const { data, isLoading, error } = api.post.getPostThumbnailBySlug.useQuery({ slug });
    slug = router.asPath.split('/').pop() ?? "404";


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
            <main className="flex justify-center h-full mt-20 p-2">
                <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
                    maxWidth: '1460px',
                    marginTop: '275px',
                    padding: '20px'
                }}>
                    <div className="flex">
                        <div className="w-2/3 float left">
                            <h1 className="mb-5 ml-3 text-xl"> Category: {slug.replace(/-/g, ' ')} </h1>
                            {
                                data.map((thumbnail, index) => (
                                    <Thumbnail className="w-1/3" key={thumbnail.id} thumbnail={thumbnail} />
                                ))
                            }
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
