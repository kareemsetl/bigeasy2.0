import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          postContent: input.postContent,
        },
      });
    }),
    getAll: publicProcedure.query(({ ctx }) => {
      return ctx.db.post.findMany();
      }),
      getAllPostContents: publicProcedure.query(({ ctx }) => {
        return ctx.db.post.findMany({
          select: {
            postContent: true, // Select only the postContent column
          },
        })}),
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { postDate: "desc" },
    });
  }),
});
