"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const requireAuth_1 = require("./middlewares/requireAuth");
const applicationRoutes_1 = __importDefault(require("./routes/applicationRoutes"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
dotenv_1.default.config({ path: ".env" });
const app = (0, express_1.default)();
// Needed for __dirname in ES modules
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = path_1.default.dirname(__filename);
// middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // your frontend origin (dev)
    credentials: true,
}));
// serve static frontend build
app.use(express_1.default.static(path_1.default.join(__dirname, "../dist")));
// backend routes
app.use("/auth", authRoutes_1.default);
app.use("/api", applicationRoutes_1.default);
app.use("/wallet", requireAuth_1.requireAuth, walletRoutes_1.default);
// frontend fallback (SPA routing)
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../dist/index.html"));
});
// protected example
app.get("/profile", requireAuth_1.requireAuth, (req, res) => {
    res.json({ msg: "Protected route", userId: req.userId });
});
// start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
