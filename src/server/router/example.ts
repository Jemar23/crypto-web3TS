import { createRouter } from "./context";
import { prisma } from "../db/client";
import { z } from "zod";
import { PrismaClient, Prisma } from '@prisma/client'

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .mutation("addTotal", {
    input: z.object({
      total: z.number()
    }),
    async resolve({ input }) {
      const totalInDb = await prisma.user.create({
        data: input
      })
      return { profit: totalInDb };
    }
  });
