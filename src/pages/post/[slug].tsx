import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';
import YouTube from "react-youtube";
import { Separator } from '~/components/ui/separator';

import { useQuery } from '@tanstack/react-query';
import Thumbnail from "~/components/Thumbnail";
import { postRouter } from '~/server/api/routers/post';
import Link from 'node_modules/next/link';
import { Badge } from '~/components/ui/badge';

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const category = [
    "Politics", "Economy", "Health Care", "Social Issues", "Featured",
    "Culture/Lifestyle", "Art", "Film", "Food", "Music",
    "The Progressive's Weekend", "The Progressive's Lifestyle In New Orleans",
    "Environment", "Air And Water Quality", "Coastal Restoration", "Op-Ed/Lagniappe", "Sports"
];
const PostView = () => {
    const router = useRouter();
    const slug = router.asPath.split('/').pop() ?? "404";
    const { data: articles, isLoading, error } = api.post.getPostBySlug.useQuery({ slug });
    const { data: postTitle } = api.post.getPostTitleBySlug.useQuery({ slug });
    const { data: postMetaData } = api.post.getPostMetaBySlug.useQuery({ slug });
    const { data: postTags } = api.post.getPostTagsBySlug.useQuery({ slug });

    const flattenedTags = postTags?.flatMap(tagObj =>
        tagObj?.name ? tagObj.name.split(', ') : []
    ) || [];

    const authorByline = postMetaData?.find(meta =>
        meta?.meta_value && typeof meta.meta_value === 'string' && meta.meta_value.includes('')
    )?.meta_value;

    let authorUrl = postMetaData?.find(meta =>
        meta?.meta_value && typeof meta.meta_value === 'string' && meta.meta_value.startsWith('http')
    )?.meta_value;


    // Extract author URL and byline from the meta data
    // Check if authorUrl starts with the bigeasymag string and replace it with a rel tag.
    const tagBaseUrl = 'https://www.bigeasymagazine.com/tag/';
    const authorBaseUrl = 'https://www.bigeasymagazine.com/authors/';
    if (authorUrl?.startsWith(tagBaseUrl)) {
        authorUrl = authorUrl?.replace(tagBaseUrl, '/author/');
    }
    if (authorUrl?.startsWith(authorBaseUrl)) {
        authorUrl = authorUrl?.replace(authorBaseUrl, '/author/');
    }
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            // Wait for a small delay before showing the content
            setTimeout(() => setIsVisible(true), 400); // Adjust delay as needed
        }
    }, [isLoading]);

    if (isLoading) return <div><Navbar /><main className="flex justify-center h-full mt-20 p-2">
        <div className={`bg-slate-200 w-full h-full border-slate-400 border-x p-10 md:text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`} style={{
            maxWidth: '1460px',
            marginTop: '275px'
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

    if (!articles) return <div>No posts!</div>;
    function formatContent(content: string) {
        // Replace line breaks with <br> tags
        let formattedContent = typeof content === 'string' ? content.replace(/(\r\n|\r|\n)/g, '<br>') : '';
        // Remove lines that start with [caption or [/caption]
        formattedContent = formattedContent?.replace(/\[caption[^\]]*\]/g, '');
        formattedContent = formattedContent.replace(/\[\/caption\]/g, '');
        /** 
                // Replace [embed] with <iframe src="
                formattedContent = formattedContent.replace(/\[embed\]/g, '<iframe src="');
                // Replace [/embed] with "></iframe>
                formattedContent = formattedContent.replace(/\[\/embed\]/g, '" frameBorder="0" width="500px" height="500px" allowFullScreen></iframe>');
        
        */
        const embedRegex = /\[embed\](https?:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))\[\/embed\]/g;
        formattedContent = formattedContent.replace(embedRegex, (match, url, videoId) => {
            // Replace with an iframe embedding the YouTube video
            console.log(videoId)

            return `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" width="560" height="315" allowfullscreen></iframe>`;
        });
        // Process standalone YouTube URLs
        const standaloneYouTubeRegex = /^(https?:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))$/;
        if (standaloneYouTubeRegex.test(formattedContent)) {
            let videoId;

            const match = formattedContent.match(standaloneYouTubeRegex);
            if (match && match.length > 2) {
                videoId = match[2];
            } else {
                // Handle the case where no match is found or the match array doesn't have an index 2
                videoId = ''; // or any other default/fallback value
            }
            formattedContent = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" width="700" height="400" allowfullscreen></iframe>`;
        }
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
                <div className="bg-slate-200 w-full h-full border-slate-400 border-x p-10 md: text-center" style={{
                    maxWidth: '1460px',
                    marginTop: '275px'
                }}>
                    <div className="flex flex-col sm:flex-row w-full">
                        <div className="md:w-2/3 float left items-center">
                            <div className="mb-10">
                                {flattenedTags?.map((term, index) => (
                                    <Link href={`/category/${term.replace(/[\s\/]+/g, '-').replace(/'/g, '')}`} key={index}>
                                        <Badge className="bg-purple-900 text-slate-100 mr-1"><u>{term}</u></Badge>
                                    </Link>
                                ))}
                                <h1 className="mt-5 text-4xl text-center">{postTitle?.postTitle}</h1>
                                {authorByline && (
                                    <p className="mt-5">
                                        <div className="text-lg items-center">{authorUrl ? <a href={authorUrl}>{authorByline}</a> : authorByline}</div>
                                    </p>
                                )}

                            </div>
                            <div className="text-left items-center">
                                {articles?.map((post) => (
                                    <tr key={post.id} className="border-slate-400 items-center">
                                        <td className="centered-images" dangerouslySetInnerHTML={{
                                            __html: formatContent(post.postContent)
                                        }}></td>
                                    </tr>
                                ))}
                            </div>
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

export default PostView;
