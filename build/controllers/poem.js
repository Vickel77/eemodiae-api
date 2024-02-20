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
exports.deletePoem = exports.updatePoem = exports.createPoem = exports.getOnePoems = exports.getPoems = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPoems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {} = req.query
    console.log("req query, ", req.query);
    try {
        const poems = yield prisma.poem.findMany();
        res
            .status(200)
            .json({ msg: "Poems fetched successfully", data: { poems } });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.getPoems = getPoems;
const getOnePoems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log("id param ", id);
    try {
        const poem = yield prisma.poem.findFirst({
            where: {
                id: id,
            },
        });
        res.status(200).json({ msg: "Poems fetched successfully", data: { poem } });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.getOnePoems = getOnePoems;
const createPoem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const values = req.body;
    console.log("create poem body ", req.body);
    try {
        const createdValues = yield prisma.poem.create({
            data: Object.assign({}, values)
        });
        res
            .status(200)
            .json({ msg: "Poem created Successfully", data: createdValues });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.createPoem = createPoem;
const updatePoem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const values = req.body;
    try {
        const updatedValues = yield prisma.poem.update({
            where: {
                id: id,
            },
            data: values,
        });
        res
            .status(200)
            .json({ msg: "Poem updated Successfully", data: updatedValues });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.updatePoem = updatePoem;
const deletePoem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const updatedValues = yield prisma.poem.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ msg: "Poem Deleted Successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.deletePoem = deletePoem;
// export  getPoems;
