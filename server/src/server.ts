import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)

const port = 3333

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany()

  return habits
});

app.listen({ port }).then(() => {
  console.log('HTTP Server running! | PORT:', port)
})