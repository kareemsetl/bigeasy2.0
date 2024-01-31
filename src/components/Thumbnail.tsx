import React from 'react';
import { Badge } from "src/components/ui/badge"
import Link from "next/link";
import Image from "next/image";

interface ThumbnailProps {
    thumbnail: {
        name: string | null;
        post_id: bigint;
        postTitle: string;
        postDate: Date | null;
        postExcerpt: string;
        slugs: string | null;
        thumbnail_pic: string | null;
    },
    _className?: string;
}
const category = [
    "Politics", "Economy", "Health Care", "Social Issues", "Featured",
    "Culture/Lifestyle", "Art", "Film", "Food", "Music",
    "The Progressive's Weekend", "The Progressive's Lifestyle In New Orleans",
    "Environment", "Air And Water Quality", "Coastal Restoration", "Op-Ed/Lagniappe", "Sports"
];
const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail, _className }) => {
    const terms = thumbnail.name?.split(',')?.map(term => capitalizeFirstLetter(term.trim())) ?? [];
    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="thumbnail-container flex flex-col md:flex-row">
            <img
                src={thumbnail!.thumbnail_pic as string}
                alt={thumbnail!.postTitle}
                className="thumbnail-pic md:order-2 md:ml-4 w-full h-full md:w-auto md:h-auto "
            />

            <div className="thumbnail-info md:order-1">
                <Link href={`/post/${thumbnail.post_id}`}>
                    <h2 className=""><u>{thumbnail.postTitle}</u></h2>
                </Link>
                <p>{thumbnail.postDate && <p>{thumbnail.postDate.toLocaleString()}</p>}</p>
                <div className="flex flex-wrap">
                    {terms.filter(term => category.includes(term)).map((term, index) => (
                        <Link href={`/category/${term.replace(/[\s\/]+/g, '-').replace(/'/g, '')}`} key={index}>
                            <Badge className="bg-purple-900 text-slate-100 mr-1 mb-1" ><u>{term}</u></Badge>
                        </Link>
                    ))}
                </div>
                <p>{thumbnail.postExcerpt}</p>
            </div>
        </div>

    );
};

export default Thumbnail;
