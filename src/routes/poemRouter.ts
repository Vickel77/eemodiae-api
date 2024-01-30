import express from "express";
import {
  getPoems,
  createPoem,
  deletePoem,
  getOnePoems,
  updatePoem,
} from "../controllers/poem";

const poemRouter = express.Router();

poemRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

poemRouter.get("/", getPoems);
poemRouter.get("/:id", getOnePoems);
poemRouter.post("/", createPoem);
poemRouter.delete("/:id", deletePoem);

poemRouter.put("/:id", updatePoem);

export default poemRouter;
