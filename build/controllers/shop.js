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
exports.deleteShopItem = exports.updateShopItem = exports.createShopItem = exports.getOneShopItem = exports.getShopItems = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getShopItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shopItem = yield prisma.shopItem.findMany();
        res
            .status(200)
            .json({ msg: "ShopItem fetched successfully", data: { shopItem } });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.getShopItems = getShopItems;
const getOneShopItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const shopItem = yield prisma.shopItem.findFirst({
            where: {
                id: id,
            },
        });
        res.status(200).json({ msg: "ShopItem fetched successfully", data: { shopItem } });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.getOneShopItem = getOneShopItem;
const createShopItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const values = req.body;
    try {
        const createdValues = yield prisma.shopItem.create({
            data: Object.assign({}, values)
        });
        res
            .status(200)
            .json({ msg: "ShopItem created Successfully", data: createdValues });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.createShopItem = createShopItem;
const updateShopItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const values = req.body;
    try {
        const updatedValues = yield prisma.shopItem.update({
            where: {
                id: id,
            },
            data: values,
        });
        res
            .status(200)
            .json({ msg: "ShopItem updated Successfully", data: updatedValues });
    }
    catch (error) {
        res.status(400).json({ msg: "Request could not be completed", error });
    }
});
exports.updateShopItem = updateShopItem;
const deleteShopItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const updatedValues = yield prisma.shopItem.delete({
            where: {
                id,
            },
        });
        res.status(200).json({ msg: "ShopItem Deleted Successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Request could not be completed" });
    }
});
exports.deleteShopItem = deleteShopItem;
// export  getPoems;
