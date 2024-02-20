import express from "express";
import { createMessage, deleteMessage, getMessages, getOneMessage, updateMessage } from "../controllers/messages";

const messageRouter = express.Router();

messageRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

messageRouter.get("/", getMessages);
messageRouter.get("/:id", getOneMessage);
messageRouter.post("/", createMessage);
messageRouter.delete("/:id", deleteMessage);

messageRouter.put("/:id", updateMessage);

export default messageRouter;
