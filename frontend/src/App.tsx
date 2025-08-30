import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Marketplace from "./pages/Marketplace";
import DAO from "./pages/DAO";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPage from "./pages/ForgotPassword";
import RegisterForm from "./pages/Register"
import { WagmiProvider } from 'wagmi'
import { config } from "../wallets/config"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TokenisePage from "./pages/TokenisePage"
import Fractionalise from "./pages/Fractionalise";
import TransferShard from "./pages/TransferShards"
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { useEffect } from "react";
import CreateProposal from "./pages/CreateProposal";
import CreateSellProposal from "./pages/SellProposal";
const queryClient = new QueryClient()
function App() {
  useEffect(()=>{
    const sdk = new CoinbaseWalletSDK({
      appName: 'SDK Playground',
    });
    const provider = sdk.makeWeb3Provider();
  },[])
  

  return (
    <div className="relative bg-gradient-to-r min-h-[calc(100vh+20vh)] from-neutral-200 to-stone-300">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Navbar />  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/property/:id" element={<Property />} />
              <Route path="/fractionalise/:id" element={<Fractionalise />} />
              <Route path="/fractions-dashboard" element={<TransferShard/>}></Route>
              <Route path="/tokenise" element={<TokenisePage/>}/>
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/create-proposal" element={<CreateProposal/>} />
              <Route path="/sell-proposal" element={<CreateSellProposal/>} />
              <Route path="/dao" element={<DAO />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/forgot" element={<ForgotPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
