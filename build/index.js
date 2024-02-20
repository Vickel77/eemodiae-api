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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const poemRouter_1 = __importDefault(require("./routes/poemRouter"));
const articleRouter_1 = __importDefault(require("./routes/articleRouter"));
const shopRouter_1 = __importDefault(require("./routes/shopRouter"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    console.log("First route boyyy ");
    res.status(200).json({ msg: "First request boyyy" });
});
app.use(express_1.default.json());
app.use("/poem", poemRouter_1.default);
app.use("/article", articleRouter_1.default);
app.use("/shop", shopRouter_1.default);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // ... you will write your Prisma Client queries here
        const allUsers = yield prisma.user.findMany({
            include: {
                Post: true,
                Profile: true,
            },
        });
    });
}
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
    main()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("DB connected");
        yield prisma.$disconnect();
    }))
        .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    }));
});
