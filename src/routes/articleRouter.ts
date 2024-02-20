import express from "express";
import { createArticle, deleteArticle, getArticles, getOneArticle, updateArticle } from "../controllers/articles";

const articleRouter = express.Router();

articleRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

articleRouter.get("/", getArticles);
articleRouter.get("/:id", getOneArticle);
articleRouter.post("/", createArticle);
articleRouter.delete("/:id", deleteArticle);

articleRouter.put("/:id", updateArticle);

export default articleRouter;
