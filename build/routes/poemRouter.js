"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const poem_1 = require("../controllers/poem");
const poemRouter = express_1.default.Router();
poemRouter.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
poemRouter.get("/", poem_1.getPoems);
poemRouter.get("/:id", poem_1.getOnePoems);
poemRouter.post("/", poem_1.createPoem);
poemRouter.delete("/:id", poem_1.deletePoem);
poemRouter.put("/:id", poem_1.updatePoem);
exports.default = poemRouter;
