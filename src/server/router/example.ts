import { createRouter } from "./context";
import { prisma } from "../db/client";
import { z } from "zod";

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
  .query("getTotal", {
    input: z.object({
      id: z.string().nullish(),
    }),
    async resolve({ input }) {
      const getter = await prisma.user.findUnique({
        where: { 
          id: input.id
        }
      })
      return { getter }
    }
  })
  .mutation("addTotal", {
    input: z.object({
      id: z.string().nullish(),
      buy: z.number(),
      sell: z.number()
    }),
    async resolve({ input }) {
      const updateTotal = await prisma.user.update({
        where: {
          id: input.id
        },
        data: {
          total: input.sell - input.buy
        }
      })
      return { profit: updateTotal };
    }
  });
