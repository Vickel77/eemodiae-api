import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import poemRouter from "./routes/poemRouter";
import articleRouter from "./routes/articleRouter";
import shopItemRouter from "./routes/shopRouter";

const prisma = new PrismaClient();
const app = express();

const PORT = 4000 || process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
 console.log("First route boyyy ")
 res.status(200).json({msg: "First request boyyy"})
});

app.use(express.json()) 

app.use("/poem", poemRouter);
app.use("/article", articleRouter);
app.use("/shop", shopItemRouter);

async function main() {
  // ... you will write your Prisma Client queries here

  const allUsers = await prisma.user.findMany({
    include: {
      Post: true,
      Profile: true,
    },
  });
}

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
  main()
    .then(async () => {
      console.log("DB connected")
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
});
