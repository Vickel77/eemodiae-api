"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articles_1 = require("../controllers/articles");
const articleRouter = express_1.default.Router();
articleRouter.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
articleRouter.get("/", articles_1.getArticles);
articleRouter.get("/:id", articles_1.getOneArticle);
articleRouter.post("/", articles_1.createArticle);
articleRouter.delete("/:id", articles_1.deleteArticle);
articleRouter.put("/:id", articles_1.updateArticle);
exports.default = articleRouter;
