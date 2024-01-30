import express from "express";
import { createShopItem, deleteShopItem, getOneShopItem, getShopItems, updateShopItem } from "../controllers/shop";

const shopItemRouter = express.Router();

shopItemRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

shopItemRouter.get("/", getShopItems);
shopItemRouter.get("/:id", getOneShopItem);
shopItemRouter.post("/", createShopItem);
shopItemRouter.delete("/:id", deleteShopItem);

shopItemRouter.put("/:id", updateShopItem);

export default shopItemRouter;
