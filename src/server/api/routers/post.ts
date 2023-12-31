import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const postRouter = createTRPCRouter({
    getFeaturedPostContents: publicProcedure.query(({ ctx }) => {
        return ctx.db.post.findMany({
            where: {
                postContent: {
                    not: {
                        equals: "", // Exclude posts with empty string
                    }
                },
                postType: "post", // Include only posts where postType is 'post'
            },
            orderBy: {
                postDate: 'desc', // Order by postDate in descending order
            },
            take: 5, // Limit the results to 5
            select: {
                id: true,
                postContent: true, // Select only the id and postContent columns
            },
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
});
