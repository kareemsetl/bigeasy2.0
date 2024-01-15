'use client'
import React, { useState } from 'react'
import { api } from "~/utils/api";
import { useRouter } from 'next/router'
import Thumbnail from "~/components/Thumbnail";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "~/components/ui/pagination"
import LoadingSpinner from '~/components/ui/LoadingSpinner';

const ClientPageRender = () => {
    const router = useRouter();
    const slug = router!.asPath!.split('/').pop().replace(/#/g, '') ?? "404";
    const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state

    const { data, isLoading } = api.post.getPostThumbnailBySlugPaginated.useQuery({
        slug,
        page: currentPage, // Use currentPage for the query
        pageSize: 10
    });
    const { data: postCountData } = api.post.getTotalPostCountBySlug.useQuery({ slug });
    const postCount = postCountData?.count || 0;
    const totalPages = Math.max(Math.ceil(postCount / 10), 0);

    // Event handler for changing the page
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        // Additional logic to handle page change can be added here
    };

    if (isLoading) return <div className="">
        <Pagination>
            <PaginationContent>
                <PaginationItem disabled={currentPage <= 1}>
                    <PaginationPrevious
                        href="#"
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                </PaginationItem>
                {/* Previous page */}
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationLink href="#" onClick={() => handlePageChange(currentPage - 1)} size={undefined}>
                            {currentPage - 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                {/* Current page */}
                <PaginationItem>
                    <PaginationLink href="#" isActive size="1000px">
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                {/* Next page */}
                <PaginationItem disabled={currentPage == totalPages}>
                    <PaginationLink href="#" onClick={() => handlePageChange(currentPage + 1)} size={undefined}>
                        {currentPage + 1}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={currentPage == totalPages}>
                    <PaginationNext
                        href="#"
                        onClick={() => handlePageChange(currentPage + 1)} size={undefined} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
        <LoadingSpinner />
        <Pagination>
            <PaginationContent>
                <PaginationItem disabled={currentPage <= 1}>
                    <PaginationPrevious
                        href="#"
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                </PaginationItem>
                {/* Previous page */}
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationLink href="#" onClick={() => handlePageChange(currentPage - 1)} size={undefined}>
                            {currentPage - 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                {/* Current page */}
                <PaginationItem>
                    <PaginationLink href="#" isActive size="1000px">
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                {/* Next page */}
                <PaginationItem disabled={currentPage == totalPages}>
                    <PaginationLink href="#" onClick={() => handlePageChange(currentPage + 1)} size={undefined}>
                        {currentPage + 1}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={currentPage == totalPages}>
                    <PaginationNext
                        href="#"
                        onClick={() => handlePageChange(currentPage + 1)} size={undefined} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </div>;

    if (!data) return <div>No posts!</div>;
    return (
        <div className="">
            <Pagination>
                <PaginationContent>
                    <PaginationItem disabled={currentPage <= 1}>
                        <PaginationPrevious
                            href="#"
                            onClick={() => handlePageChange(currentPage - 1)}
                        />
                    </PaginationItem>
                    {/* Previous page */}
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(currentPage - 1)} size={undefined}>
                                {currentPage - 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                    {/* Current page */}
                    <PaginationItem>
                        <PaginationLink href="#" isActive size="1000px">
                            {currentPage}
                        </PaginationLink>
                    </PaginationItem>
                    {/* Next page */}
                    <PaginationItem disabled={currentPage == totalPages}>
                        <PaginationLink href="#" onClick={() => handlePageChange(currentPage + 1)} size={undefined}>
                            {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled={currentPage == totalPages}>
                        <PaginationNext
                            href="#"
                            onClick={() => handlePageChange(currentPage + 1)} size={undefined} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            {
                data.map((thumbnail) => (
                    <Thumbnail key={thumbnail.post_id} thumbnail={thumbnail} />
                ))
            }
            <Pagination>
                <PaginationContent>
                    <PaginationItem disabled={currentPage <= 1}>
                        <PaginationPrevious
                            href="#"
                            onClick={() => handlePageChange(currentPage - 1)}
                        />
                    </PaginationItem>
                    {/* Previous page */}
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationLink href="#" onClick={() => handlePageChange(currentPage - 1)} size={undefined}>
                                {currentPage - 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                    {/* Current page */}
                    <PaginationItem>
                        <PaginationLink href="#" isActive size="1000px">
                            {currentPage}
                        </PaginationLink>
                    </PaginationItem>
                    {/* Next page */}
                    <PaginationItem disabled={currentPage == totalPages}>
                        <PaginationLink href="#" onClick={() => handlePageChange(currentPage + 1)} size={undefined}>
                            {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled={currentPage == totalPages}>
                        <PaginationNext
                            href="#"
                            onClick={() => handlePageChange(currentPage + 1)} size={undefined} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>

    )
}

export default ClientPageRender