import express from "express";
import dotenv from "dotenv";
  import authRoutes from "./routes/authRoutes";
  import { requireAuth } from "./middlewares/requireAuth";
  import applicationRoutes from './routes/applicationRoutes';
  import cors from "cors"
  import walletRoutes from "./routes/walletRoutes";
import path from "path";

  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173", // your frontend origin
      credentials: true,               // allow cookies & Authorization headers
    })
  );
  app.use(express.static(path.join(__dirname, 'build')));


  
  


  dotenv.config({
    "path": ".env"
  });



  app.use("/auth", authRoutes); 
  app.use('/api', applicationRoutes);
  app.use('/wallet', requireAuth, walletRoutes);

  app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname , "/build/index.html"))
  })

  app.get("/profile", requireAuth, (req, res) => {
    res.json({ msg: "Protected route", userId: (req as any).userId });
  });


  app.listen(process.env.PORT || 3000)
