import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from '@trpc/server';

interface Post {
    id: bigint;
    postAuthor: bigint;
    postDate: Date;
    postDateGmt: Date;
    postContent: string;
    postTitle: string;
    postExcerpt: string;
    postStatus: string;
    commentStatus: string;
    pingStatus: string;
    postPassword: string;
    postName: string;
    toPing: string;
    pinged: string;
    postModified: Date;
    postModifiedGmt: Date;
    postContentFiltered: string;
    postParent: bigint;
    guid: string;
    menuOrder: number;
    postType: string;
    postMimeType: string;
    commentCount: bigint;
}


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
            const post = await ctx.db.post.findMany({
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

            // Check if post are found
            if (!post || post.length === 0) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No post found with the title '${slug}'`,
                });
            }

            return post;
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
    getPostTitleBySlug: publicProcedure
        .input(z.object({
            slug: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const { slug } = input;

            // Convert slug to a number
            const numericSlug = parseInt(slug, 10);
            if (isNaN(numericSlug)) {
                throw new Error("Invalid slug: slug must be a numeric value");
            }

            // Fetch the post title
            const post = await ctx.db.post.findUnique({
                where: {
                    id: numericSlug,
                },
                select: {
                    postTitle: true,
                },
            });

            if (!post) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No post found with the ID '${slug}'`,
                });
            }

            return post;
        }),
    getPostMetaBySlug: publicProcedure
        .input(z.object({
            slug: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const { slug } = input;

            // Convert slug to a number
            const numericSlug = parseInt(slug, 10);
            if (isNaN(numericSlug)) {
                throw new Error("Invalid slug: slug must be a numeric value");
            }

            // Fetch the meta values
            const metaValues = await ctx.db.post_meta.findMany({
                where: {
                    post_id: {
                        equals: numericSlug,
                    },
                    meta_key: {
                        in: ['author_url', 'byline'],
                    },
                },
                select: {
                    meta_value: true,
                },
            });

            if (!metaValues || metaValues.length === 0) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No meta found for post with ID '${slug}'`,
                });
            }

            return metaValues;
        }),
    getPostTagsBySlug: publicProcedure
        .input(z.object({
            slug: z.string(),
        }))
        .query(async ({ ctx, input }) => {
            const { slug } = input;
            return ctx.db.thumbnail.findMany({
                where: {
                    post_id: +slug
                },
                select: {
                    name: true, // Select the tags column, called name in the thumbnail table
                },
            });
        }),
    //the below TRPC procedure is how you would 
    //start a procedure if you wanted it to show data based on user.
    //we will be doing that here eventually so authors can post 
/** 
    create: privateProcedure.input(z.object({
        id: BigInt,
        postAuthor: BigInt,
        postDate: Date,
        postDateGmt: Date,
        postContent: z.string,
        postTitle: z.string,
        postExcerpt: z.string,
        postStatus: z.string,
        commentStatus: z.string,
        pingStatus: z.string,
        postPassword: z.string,
        postName: z.string,
        toPing: z.string,
        pinged: z.string,
        postModified: Date,
        postModifiedGmt: Date,
        postContentFiltered: z.string,
        postParent: BigInt,
        guid: z.string,
        menuOrder: z.number,
        postType: z.string,
        postMimeType: z.string,
        commentCount: BigInt,
    })).mutation(async ({ ctx }) => {
        const authorId = ctx.userId;

        const post = ctx.db.post.create({


        })
    }
    )
*/
});
