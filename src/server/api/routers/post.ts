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

            // Fetch the post content
            const posts = await ctx.db.post.findMany({
                where: {
                    id: {
                        equals: slug, // Use the filtered slug for an exact match
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
});
