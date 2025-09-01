"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../src/generated/prisma");
const client = new prisma_1.PrismaClient();
exports.default = client;
