"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticle = exports.updateArticle = exports.createArticle = exports.getOneArticle = exports.getArticles = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield prisma.article.findMany();
        res
            .status(200)
            .json({ msg: "Articles fetched successfully", data: { articles } });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.getArticles = getArticles;
const getOneArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const article = yield prisma.article.findFirst({
            where: {
                id: id,
            },
        });
        res.status(200).json({ msg: "Article fetched successfully", data: { article } });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.getOneArticle = getOneArticle;
const createArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const values = req.body;
    try {
        const createdValues = yield prisma.article.create({
            data: Object.assign({}, values)
        });
        res
            .status(200)
            .json({ msg: "Article created Successfully", data: createdValues });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.createArticle = createArticle;
const updateArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const values = req.body;
    try {
        const updatedValues = yield prisma.article.update({
            where: {
                id: id,
            },
            data: values,
        });
        res
            .status(200)
            .json({ msg: "Article updated Successfully", data: updatedValues });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.updateArticle = updateArticle;
const deleteArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const updatedValues = yield prisma.article.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ msg: "Article Deleted Successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.deleteArticle = deleteArticle;
// export  getPoems;
