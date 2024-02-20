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
exports.deleteMessage = exports.updateMessage = exports.createMessage = exports.getOneMessage = exports.getMessages = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield prisma.message.findMany();
        res
            .status(200)
            .json({ msg: "Messages fetched successfully", data: { messages } });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.getMessages = getMessages;
const getOneMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const message = yield prisma.message.findFirst({
            where: {
                id: id,
            },
        });
        res.status(200).json({ msg: "Message fetched successfully", data: { message } });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.getOneMessage = getOneMessage;
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const values = req.body;
    try {
        const createdValues = yield prisma.message.create({
            data: Object.assign({}, values)
        });
        res
            .status(200)
            .json({ msg: "Message created Successfully", data: createdValues });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.createMessage = createMessage;
const updateMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const values = req.body;
    try {
        const updatedValues = yield prisma.message.update({
            where: {
                id: id,
            },
            data: values,
        });
        res
            .status(200)
            .json({ msg: "Message updated Successfully", data: updatedValues });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.updateMessage = updateMessage;
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const updatedValues = yield prisma.message.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ msg: "Message Deleted Successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.deleteMessage = deleteMessage;
// export  getPoems;
