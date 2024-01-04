import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';


import { useQuery } from '@tanstack/react-query';
import Thumbnail from "~/components/Thumbnail";
import { postRouter } from '~/server/api/routers/post';


const PostView = () => {
    const router = useRouter();
    const slug = router.asPath.split('/').pop() ?? "404";
    const { data: articles, isLoading, error } = api.post.getPostBySlug.useQuery({ slug });


    if (isLoading) return <div>Loading...</div>;

    if (!articles) return <div>No posts!</div>;
    function formatContent(content) {
        // Replace line breaks with <br> tags
        let formattedContent = content.replace(/(\r\n|\r|\n)/g, '<br>');

        // Add more conversions here if necessary, e.g., for indentations or other formatting

        return formattedContent;
    }
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
                    {articles?.map((post) => (
                        <tr key={post.id} className="border-slate-400">
                            <td className="" dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(formatContent(post.postContent))
                            }}></td>
                        </tr>
                    ))}
                </div>
            </main>
        </>
    );
};

export default PostView;
