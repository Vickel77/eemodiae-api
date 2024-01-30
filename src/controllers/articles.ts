import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getArticles = async (req: Request, res: Response) => {
  
  try {
    const articles = await prisma.article.findMany();

    res
      .status(200)
      .json({ msg: "Articles fetched successfully", data: { articles } });
  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed" , error});
  }
};

export const getOneArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const article = await prisma.article.findFirst({
      where: {
        id: id,
      },
    });

    res.status(200).json({ msg: "Article fetched successfully", data: { article } });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};

export const createArticle = async (req: Request, res: Response) => {
  const values = req.body;

  try {
    const createdValues = await prisma.article.create({
      data : {
        ...values,
      }
    });

    res
      .status(200)
      .json({ msg: "Article created Successfully", data: createdValues });

  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed", error });
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;
  try {
    const updatedValues = await prisma.article.update({
      where: {
        id: id,
      },
      data: values,
    });

    res
      .status(200)
      .json({ msg: "Article updated Successfully", data: updatedValues });
  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed", error });
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const updatedValues = await prisma.article.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ msg: "Article Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};
// export  getPoems;
