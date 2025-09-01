"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const requireAuth_1 = require("./middlewares/requireAuth");
const applicationRoutes_1 = __importDefault(require("./routes/applicationRoutes"));
const cors_1 = __importDefault(require("cors"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true, // allow cookies & Authorization headers
}));
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
dotenv_1.default.config({
    "path": ".env"
});
app.use("/auth", authRoutes_1.default);
app.use('/api', applicationRoutes_1.default);
app.use('/wallet', requireAuth_1.requireAuth, walletRoutes_1.default);
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "/build/index.html"));
});
app.get("/profile", requireAuth_1.requireAuth, (req, res) => {
    res.json({ msg: "Protected route", userId: req.userId });
});
app.listen(process.env.PORT || 3000);
