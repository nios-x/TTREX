"use client";

import { MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useAccount, useEnsName } from 'wagmi'
import {WalletOptions} from "../../wallets/walletOptions"
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { useDisconnect } from "wagmi";
import { useEffect } from "react";
const Navbar = () => {
  const features = [
    { title: "Dashboard", description: "Overview of your activity", href: "/dashboard" },
    { title: "Marketplace", description: "Buy & sell fractions", href: "/marketplace" },
    { title: "DAO", description: "Vote on ownership decisions", href: "/dao", blocked:true },
    { title: "Properties", description: "View available properties", href: "/property/1", blocked:true },
  ];
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })

  const handleLogout = () => {
    Cookies.remove("token");       
    window.location.href = "/";    // Redirect to home page (or /login)
  };

  const location = useLocation();
  const token = Cookies.get("token");
  const isLoggedIn = !!token;

  useEffect(()=>{
    const fetcher = async()=>{
      if(address){
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/wallet/upsert`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
          },
          
          body:JSON.stringify({address}),
          credentials:"include",

        })
        const data = await res.json()
      }
    } 
    fetcher()
  },[address])


  return (
    <>
      {location.pathname !== "/" && <div className="py-10"></div>}
      <section className="pt-4 pb-3 absolute w-full top-0 z-50 bg-[rgba(255,255,255,0.2)] backdrop:blur-3xl">
        <div className="container">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <h1 className="font-bold text-3xl pl-4 pt-2 mf3">TTREX</h1>
            </Link>

            {/* Desktop Menu */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className={navigationMenuTriggerStyle()}>Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 p-3">
                      {features.map((feature, index) => (
                        <NavigationMenuLink asChild key={index}>
                          <Link
                            to={feature.href}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <p className="mb-1 font-semibold">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                      <NavigationMenuLink asChild >
                      <a href="/fractions-dashboard"  className="mb-1  rounded-md text-left p-3 transition-colors hover:bg-muted/70" >
                            <p className="mb-1 font-semibold">Fractions Dashboard</p>
                            <p className="text-sm text-muted-foreground">Send Shards to others or unlock</p>
                      </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild >
                        {isLoggedIn && <button onClick={handleLogout} className="mb-1 font-semibold rounded-md text-left p-3 transition-colors hover:bg-muted/70" >Logout</button>}
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/marketplace" className={navigationMenuTriggerStyle()}>Marketplace</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink  asChild>
                    <Link to="/dao"  className={navigationMenuTriggerStyle()}>DAO</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/profile" className={navigationMenuTriggerStyle()}>Profile</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden items-center gap-4 mr-3 lg:flex">
              {!isLoggedIn ? (
                <>
                  <Link to="/login"><Button variant="outline">Sign in</Button></Link>
                  <Link to="/register"><Button>Start for free</Button></Link>
                </>
              ) : (
                <>
                {!address && <WalletOptions/>}
                {address && <div className="text-xs w-0 -translate-x-68 pt-1">{ensName ? `${ensName} (${address})` : address}</div>}
                { address && <Button onClick={() => disconnect()}>Disconnect</Button>}

                </>
              )}
            </div>


            <Sheet>
              <SheetTrigger asChild className="lg:hidden mr-6">
                <Button variant="outline" size="icon"><MenuIcon className="h-4 w-4" /></Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to="/" className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold tracking-tighter">TTREX</h2>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col p-4">
                  <Accordion type="single" collapsible className="mt-4 mb-2">
                    <AccordionItem value="solutions" className="border-none">
                      <AccordionTrigger className="text-base hover:no-underline">Features</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2">
                          {features.map((feature, index) => (
                            <Link
                              to={feature.href}
                              key={index}
                              className="rounded-md p-3 transition-colors hover:bg-muted/70"
                            >
                              <p className="mb-1 font-semibold">{feature.title}</p>
                              <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flex-col gap-6">
                    <Link to="/marketplace" className="font-medium">Marketplace</Link>
                    <Link to="/dao" className="font-medium">DAO</Link>
                    <Link to="/profile" className="font-medium">Profile</Link>
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    {!isLoggedIn ? (
                      <>
                        <Link to="/login"><Button variant="outline">Sign in</Button></Link>
                        <Link to="/register"><Button>Start for free</Button></Link>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
