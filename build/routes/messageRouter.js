"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_1 = require("../controllers/messages");
const messageRouter = express_1.default.Router();
messageRouter.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
messageRouter.get("/", messages_1.getMessages);
messageRouter.get("/:id", messages_1.getOneMessage);
messageRouter.post("/", messages_1.createMessage);
messageRouter.delete("/:id", messages_1.deleteMessage);
messageRouter.put("/:id", messages_1.updateMessage);
exports.default = messageRouter;
