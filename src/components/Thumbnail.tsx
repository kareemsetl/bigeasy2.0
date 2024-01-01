import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Badge } from "src/components/ui/badge"
import Link from "next/link";

interface ThumbnailProps {
    thumbnail: {
        post_id: bigint; 
        postTitle: string; 
        postDate: Date | null; 
        postExcerpt: string; 
        name: string | null; 
        slugs: string | null; 
        thumbnail_pic: string;
    };
}
const category = [
    "Politics", "Economy", "Health Care", "Social Issues", "Featured",
    "Culture/Lifestyle", "Art", "Film", "Food", "Music",
    "The Progressive's Weekend", "The Progressive's Lifestyle In New Orleans",
    "Environment", "Air And Water Quality", "Coastal Restoration", "Op-Ed/Lagniappe", "Sports"
];
const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
    const terms = thumbnail.name?.split(',')?.map(term => capitalizeFirstLetter(term.trim())) ?? [];
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="thumbnail-container">
            <div className="thumbnail-info">
                <h2><u>{thumbnail.postTitle}</u></h2>
                <p>{thumbnail.postDate && <p>{thumbnail.postDate.toLocaleDateString()}</p>}</p>
                {terms.filter(term => category.includes(term)).map((term, index) => (
                    <Link href={`/category/${term.replace(/[\s\/]+/g, '-')}`} key={index}>
                        <Badge className="bg-purple-900 text-slate-100 mr-1" variant="destructive" key={index} ><u>{term}</u></Badge>
                    </Link>
                ))}
                <p>{thumbnail.postExcerpt}</p>
            </div>
            <img src={thumbnail.thumbnail_pic} alt={thumbnail.postTitle} className="thumbnail-pic" />
        </div>
    );
};

export default Thumbnail;
