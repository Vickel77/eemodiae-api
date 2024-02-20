"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shop_1 = require("../controllers/shop");
const shopItemRouter = express_1.default.Router();
shopItemRouter.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
shopItemRouter.get("/", shop_1.getShopItems);
shopItemRouter.get("/:id", shop_1.getOneShopItem);
shopItemRouter.post("/", shop_1.createShopItem);
shopItemRouter.delete("/:id", shop_1.deleteShopItem);
shopItemRouter.put("/:id", shop_1.updateShopItem);
exports.default = shopItemRouter;
