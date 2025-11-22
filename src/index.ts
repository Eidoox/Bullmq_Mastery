import express, { type Request, type Response } from "express";

import { Prisma } from "./generated/prisma/client.js";
import { prisma } from "./config/PrismaClient.js";
const app = express();

app.get("/", async (req: Request, res: Response) => {
  const userrs = await prisma.user.findMany();

  return res.status(200).json({ message: true, data: userrs });
});
app.get("/user", async (req: Request, res: Response) => {
  const userr = await prisma.user.create({
    data: { name: "gawa", age: 100 },
  });

  return res.status(200).json({ message: true, data: userr });
});

app.listen(5000, () => {
  console.log("server is running");
});
