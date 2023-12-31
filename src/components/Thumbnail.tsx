import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

interface ThumbnailProps {
    thumbnail: {
        id: string;
        postTitle: string;
        postDate: Date;
        postExcerpt: string;
        name: string;
        thumbnail_pic: string;
    };
}

const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
    return (
        <div className="thumbnail-container">
            <div className="thumbnail-info">
                <h2>{thumbnail.postTitle}</h2>
                <p>{thumbnail.postDate.toLocaleDateString()}</p>
                <p>{thumbnail.name}</p>
                <p>{thumbnail.postExcerpt}</p>
            </div>
            <img src={thumbnail.thumbnail_pic} alt={thumbnail.postTitle} className="thumbnail-pic" />
        </div>
    );
};

export default Thumbnail;
