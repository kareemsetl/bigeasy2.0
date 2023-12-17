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
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { postDate: "desc" },
    });
  }),
});
