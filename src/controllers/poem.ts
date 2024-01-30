import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getPoems = async (req: Request, res: Response) => {

  // const {} = req.query

  console.log("req query, ", req.query);
  
  try {
    const poems = await prisma.poem.findMany();

    res
      .status(200)
      .json({ msg: "Poems fetched successfully", data: { poems } });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};

export const getOnePoems = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("id param ", id)
  try {
    const poem = await prisma.poem.findFirst({
      where: {
        id: id,
      },
    });

    res.status(200).json({ msg: "Poems fetched successfully", data: { poem } });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};

export const createPoem = async (req: Request, res: Response) => {
  const values = req.body;
  console.log("create poem body ", req.body);
  try {
    const createdValues = await prisma.poem.create({
      data : {
        ...values,
      }
    });

    res
      .status(200)
      .json({ msg: "Poem created Successfully", data: createdValues });

  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed", error });
  }
};

export const updatePoem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;
  try {
    const updatedValues = await prisma.poem.update({
      where: {
        id: id,
      },
      data: values,
    });

    res
      .status(200)
      .json({ msg: "Poem updated Successfully", data: updatedValues });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};

export const deletePoem = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const updatedValues = await prisma.poem.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ msg: "Poem Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};
// export  getPoems;
