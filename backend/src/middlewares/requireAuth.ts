import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer token"

  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const userIdObj  = jwt.verify(token, JWT_SECRET) as { userId: string };
    (req as any).userId = userIdObj.userId;
    //@ts-ignore
    console.log(req.userId);

    next();
  } catch (e){
    console.log(e)
    res.status(403).json({ error: "Invalid token" });
  }
};
