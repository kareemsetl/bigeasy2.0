import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import Thumbnail from '~/components/Thumbnail';


const Articles = () => {
    const router = useRouter();
    let slug = router.asPath.split('/').pop() ?? "404";

    //exception for the august edition
    if (slug == 'August-2018') {
        slug = 'August'
    }
    const { data: thumbnail, isLoading } = api.post.getPostThumbnailBySlug.useQuery({ slug });
    // const { data: titles } = api.post.getPostTitlesBySlug.useQuery({ slug });
    if (isLoading) return <div className="items-center">
        <h1 className="ml-3 mb-3 text-xl"> {slug.replace(/-/g, ' ').replace('August', 'August 2018')} Edition</h1>
        LOADING!!
    </div>;

    if (!thumbnail) return <div className="text-2xl">No posts!</div>;
    return (
        <div>
            <h1 className="ml-3 mb-3 text-xl"> {slug.replace(/-/g, ' ').replace('August', 'August 2018')} Edition</h1>
            {
                thumbnail?.map((item) => (
                    <Thumbnail key={item.post_id} thumbnail={item} />
                ))
            }
        </div>
    );
}

const MonthlyEditions = () => {

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
                        <div className="md:w-2/3 float left">
                            <Articles />
                        </div>
                        {/* Second Column for Additional Content */}
                        <div className="flex flex-col sm:flex-row float-left">
                            <h1 className="mb-5 ml-3 text-xl"> Ad Space </h1>


                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MonthlyEditions;