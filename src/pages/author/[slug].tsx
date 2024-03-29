import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import Thumbnail from "~/components/Thumbnail";

const Author = () => {
    const router = useRouter();
    const slug = router.asPath.split('/').pop() ?? "404";
    const { data, isLoading } = api.post.getPostThumbnailBySlug.useQuery({ slug });


    if (isLoading) return <div><Navbar /><main className="flex justify-center h-full mt-20 p-2">
    <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
      maxWidth: '1460px',
      marginTop: '255px',
      padding: '20px'
    }}>
      <div className="flex">
        <div className="w-2/3 float left">
          <b className="w-1/3 text-center items-center ml-10">
          </b>
        </div>
        {/* Second Column for Additional Content */}
        <div className="w-1/3 float-left">
          <h1 className="mb-5 ml-3 text-xl"> Ad Space </h1>
        </div>
      </div>
    </div>
  </main>
  </div>;

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
                    marginTop: '255px',
                    padding: '20px'
                }}>
                    <div className="flex flex-col sm:flex-row w-full">
                        <div className="md:w-2/3 float left items-center">
                            <h1 className="mb-5 ml-3 text-xl"> {slug.replace(/-/g, ' ')}'s Articles </h1>
                            {
                                data.map((thumbnail) => (
                                    <Thumbnail key={thumbnail.post_id} thumbnail={thumbnail} />
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

export default Author;
