const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("Selamat datang di API akuh");
});

app.get("/products", async (req, res) => {
  const product = await prisma.product.findMany();
  res.send(products);
});

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
