  import express from "express";
  import authRoutes from "./routes/authRoutes";
  import { requireAuth } from "./middlewares/requireAuth";
  import applicationRoutes from './routes/applicationRoutes';
  import cors from "cors"
  import walletRoutes from "./routes/walletRoutes";
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:5173", // your frontend origin
      credentials: true,               // allow cookies & Authorization headers
    })
  );

  app.use(express.json());
  import dotenv from "dotenv";


  dotenv.config({
    "path": ".env"
  });



  app.use("/auth", authRoutes); 
  app.use('/api', applicationRoutes);
  app.use('/wallet', requireAuth, walletRoutes);

  app.get('/',(req,res)=>{
    res.send("Running...")
  })

  app.get("/profile", requireAuth, (req, res) => {
    res.json({ msg: "Protected route", userId: (req as any).userId });
  });


  app.listen(process.env.PORT || 3000)
