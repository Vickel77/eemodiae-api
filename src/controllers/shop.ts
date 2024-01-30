import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getShopItems = async (req: Request, res: Response) => {
  
  try {
    const shopItem = await prisma.shopItem.findMany();

    res
      .status(200)
      .json({ msg: "ShopItem fetched successfully", data: { shopItem } });
  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed" , error});
  }
};

export const getOneShopItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const shopItem = await prisma.shopItem.findFirst({
      where: {
        id: id,
      },
    });

    res.status(200).json({ msg: "ShopItem fetched successfully", data: { shopItem } });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};

export const createShopItem = async (req: Request, res: Response) => {
  const values = req.body;

  try {
    const createdValues = await prisma.shopItem.create({
      data : {
        ...values,
      }
    });

    res
      .status(200)
      .json({ msg: "ShopItem created Successfully", data: createdValues });

  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed", error });
  }
};

export const updateShopItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const values = req.body;
  try {
    const updatedValues = await prisma.shopItem.update({
      where: {
        id: id,
      },
      data: values,
    });

    res
      .status(200)
      .json({ msg: "ShopItem updated Successfully", data: updatedValues });
  } catch (error) {
    res.status(400).json({ msg: "Request could not be completed", error });
  }
};

export const deleteShopItem = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const updatedValues = await prisma.shopItem.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ msg: "ShopItem Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ error: "Request could not be completed" });
  }
};
// export  getPoems;
