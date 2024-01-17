import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from '@trpc/server';

export const postRouter = createTRPCRouter({
    getFeaturedPostThumbnail: publicProcedure.query(({ ctx }) => {
        return ctx.db.thumbnail.findMany({
            where: {
                slugs: {
                    contains: "Featured", // Use the dynamic slug with a LIKE '%slug%' pattern
                },
            },
            orderBy: {
                postDate: 'desc', // Order by postTitle
            },
            take: 5,
        });
    }),
    // New procedure to get post titles by slug
    getPostTitlesBySlug: publicProcedure
        .input(z.object({
            slug: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const { slug } = input;
            return ctx.db.post.findMany({
                where: {
                    term_relationship: {
                        some: {
                            termTaxonomy: {
                                term: {
                                    slug: slug, // Use the dynamic slug
                                },
                            },
                        },
                    },
                },
                orderBy: {
                    postTitle: 'asc', // Order by postTitle
                },
                select: {
                    postTitle: true, // Select the postTitle column
                    id: true
                },
            });
        }),
    getPostThumbnailBySlug: publicProcedure
        .input(z.object({
            slug: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const { slug } = input;
            return ctx.db.thumbnail.findMany({
                where: {
                    slugs: {
                        contains: slug, // Use the dynamic slug with a LIKE '%slug%' pattern
                    },
                },
                orderBy: {
                    postDate: 'desc', // Order by postTitle
                },
            });
        }),
    getPostBySlug: publicProcedure
        .input(z.object({
            slug: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const { slug } = input;

            // Attempt to convert slug to a number
            const numericSlug = parseInt(slug, 10);

            // Check if the conversion is successful (numericSlug is not NaN)
            if (isNaN(numericSlug)) {
                throw new Error("Invalid slug: slug must be a numeric value");
            }

            // Fetch the post content
            const posts = await ctx.db.post.findMany({
                where: {
                    id: {
                        equals: numericSlug, // Use the numeric slug for an exact match
                    },
                },
                select: {
                    id: true,
                    postContent: true, // Select only the postContent
                },
            });

            // Check if posts are found
            if (!posts || posts.length === 0) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No posts found with the title '${slug}'`,
                });
            }

            return posts;
        }),
    getPostThumbnailBySlugPaginated: publicProcedure
        .input(z.object({
            slug: z.string(),
            page: z.number().default(1), // Default to page 1
            pageSize: z.number().default(10), // Default to 10 items per page
        }))
        .query(async ({ ctx, input }) => {
            const { slug, page, pageSize } = input;
            const skip = (page - 1) * pageSize; // Calculate the number of items to skip

            return ctx.db.thumbnail.findMany({
                where: {
                    slugs: {
                        contains: slug, // Use the dynamic slug with a LIKE '%slug%' pattern
                    },  //need to change to keyset-based pagination later
                },
                orderBy: {
                    postDate: 'desc', // Order by postDate
                },
                take: pageSize, // Limit the number of items returned
                skip: skip, // Skip the items for previous pages
            });
        }),
    getTotalPostCountBySlug: publicProcedure
        .input(z.object({
            slug: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const { slug } = input;

            // Count the number of posts with the given slug
            const postCount = await ctx.db.thumbnail.count({
                where: {
                    slugs: {
                        contains: slug, // Use the slug for an exact match
                    },
                },
            });

            // Check if any posts are found
            if (postCount === 0) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No posts found with the slug '${slug}'`,
                });
            }

            return { count: postCount };
        }),


});
