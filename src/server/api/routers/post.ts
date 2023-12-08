import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
      return ctx.db.post.findMany();
      }),
      getAllPostContents: publicProcedure.query(({ ctx }) => {
        return ctx.db.post.findMany({
          select: {
            id: true,
            postContent: true, // Select only the postContent column
          },
        })}),
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { postDate: "desc" },
    });
  }),
});
