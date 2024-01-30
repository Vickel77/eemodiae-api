import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getMessages = async (req: Request, res: Response) => {
  
  try {
    const messages = await prisma.message.findMany();

    res
      .status(200)
      .json({ msg: "Messages fetched successfully", data: { messages } });
  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed" , error});
  }
};

export const getOneMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const message = await prisma.message.findFirst({
      where: {
        id: id,
      },
    });

    res.status(200).json({ msg: "Message fetched successfully", data: { message } });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  const values = req.body;

  try {
    const createdValues = await prisma.message.create({
      data : {
        ...values,
      }
    });

    res
      .status(200)
      .json({ msg: "Message created Successfully", data: createdValues });

  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed", error });
  }
};

export const updateMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;
  try {
    const updatedValues = await prisma.message.update({
      where: {
        id: id,
      },
      data: values,
    });

    res
      .status(200)
      .json({ msg: "Message updated Successfully", data: updatedValues });
  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed", error });
  }
};

export const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const updatedValues = await prisma.message.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ msg: "Message Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};
// export  getPoems;
