"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce errors.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights with real-time data visualization and reporting.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with integrated communication tools.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Enterprise Security",
      description: "Keep your data safe with end-to-end encryption and compliance features.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools through our extensive API ecosystem.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden flex justify-center">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12 px-4"
            >
              <Badge
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium font-poppins mf3"
                variant="secondary"
              >
                Launching Soon
              </Badge>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl mf2 font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 font-poppins"
              >
                Invest in Iconic Real Estate – Fraction by Fraction
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-inter mf2">
                Own fractions of world-famous landmarks through NFTs. Trade, govern, and earn from real estate like never before.
                TTREX makes property investment accessible for everyone.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-md h-12 px-8 text-base font-inter mf3" onClick={() => navigate('/start-investing')}>
                  Start Investing Now
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-md h-12 px-8 text-base mf3 font-inter" onClick={() => navigate('/login')}>
                  Login Here
                </Button>
              </div>

              {/* Features / Benefits */}
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground font-inter">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>No minimum investment</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Fractional ownership via NFTs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Participate in property decisions</span>
                </div>
              </div>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <img
                  src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  className="w-full h-auto"

                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>



        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mf3" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mf2 tracking-tight font-poppins w-1/2">
                Everything You Need to Own Fractional Real Estate
              </h2>
              <p className="max-w-[800px] text-muted-foreground mf2 md:text-lg font-inter">
                TTREX provides a seamless platform to invest, trade, and govern iconic real estate properties using fractional NFTs. Your gateway to property ownership like never before.
              </p>
            </motion.div>

            {/* Features Cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Buy Fractions",
                  description: "Purchase small portions of famous properties via NFTs.",
                  icon: <span className="text-4xl">🏠</span>,
                },
                {
                  title: "Trade Easily",
                  description: "Sell or buy fractions seamlessly on the TTREX marketplace.",
                  icon: <span className="text-4xl">💱</span>,
                },
                {
                  title: "Govern Together",
                  description: "Participate in property decisions through our DAO voting system.",
                  icon: <span className="text-4xl">🗳️</span>,
                },
                {
                  title: "Earn Rewards",
                  description: "Receive simulated rental income or property appreciation.",
                  icon: <span className="text-4xl">💰</span>,
                },
                {
                  title: "Secure & Transparent",
                  description: "Blockchain-backed ownership ensures security and transparency.",
                  icon: <span className="text-4xl">🔒</span>,
                },
                {
                  title: "Property Analytics",
                  description: "Track property performance and fraction prices in real-time.",
                  icon: <span className="text-4xl">📊</span>,
                },
              ].map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full  flex items-center justify-center text-primary mb-4 text-2xl">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 mf3 font-poppins">{feature.title}</h3>
                      <p className="text-muted-foreground mf2 font-inter">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 mf3 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium  " variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple Process, Powerful Results</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg mf2 ">
                Get started in minutes and see the difference our platform can make for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 mt-6 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Create Account",
                  description: "Sign up in seconds with just your email. No credit card required to get started.",
                },
                {
                  step: "02",
                  title: "Configure Workspace",
                  description: "Customize your workspace to match your team's unique workflow and requirements.",
                },
                {
                  step: "03",
                  title: "Boost Productivity",
                  description: "Start using our powerful features to streamline processes and achieve your goals.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground mf2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
  <div className="container px-4 md:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
    >
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
        FAQ
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mf2">Frequently Asked Questions</h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg mf3">
        Find answers to common questions about TTREX and fractional NFT real estate investing.
      </p>
    </motion.div>

    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {[
          {
            question: "What is TTREX and how does it work?",
            answer:
              "TTREX allows you to own fractions of world-famous real estate properties as NFTs. You can buy, sell, and trade these fractional ownership tokens on our platform, participating in real estate investment without the high capital requirement.",
          },
          {
            question: "How do I start investing?",
            answer:
              "To start, create an account on TTREX, connect your crypto wallet, and browse available properties. You can purchase fractional NFTs directly from the marketplace and manage your portfolio on your dashboard.",
          },
          {
            question: "Can I sell my NFT property shares?",
            answer:
              "Yes! Fractional NFTs are tradable on the TTREX marketplace. You can list your NFT shares for sale at any time and earn from your investment based on market demand.",
          },
          {
            question: "Is my investment secure?",
            answer:
              "Security is our top priority. All transactions are secured on the blockchain, and your NFT ownership is verifiable and immutable. We also follow best practices for wallet integrations and user authentication.",
          },
          {
            question: "Do I receive dividends or rental income?",
            answer:
              "Depending on the property and fractional NFT type, investors may receive proportional income from rent or other monetization streams. Details for each property are clearly listed on its page.",
          },
          {
            question: "How do I participate in property governance?",
            answer:
              "TTREX NFT holders can vote on governance proposals related to property management and decision-making. Each NFT share carries voting power proportional to your ownership fraction.",
          },
        ].map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <AccordionItem value={`item-${i}`} className=" border-b border-border/40 py-2">
              <AccordionTrigger className="mf3 text-left  font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </div>
</section>


      </main>
     {/* CTA Section */}
<section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
  <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
  <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

  <div className="container px-4 md:px-6 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-6 text-center"
    >
      <h2 className="text-3xl md:text-4xl mf3 lg:text-5xl font-bold tracking-tight">
        Own Iconic Real Estate – Fraction by Fraction
      </h2>
      <p className="mx-auto max-w-[700px] mf2 text-primary-foreground/80 md:text-xl">
        Invest in world-famous landmarks through NFTs. Trade, govern, and earn from real estate like never before with TTREX.
      </p>
      <div className="flex flex-col sm:flex-row mf3 gap-4 mt-4">
        <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base" onClick={() => navigate('/start-investing')}>
          Start Investing Now
          <ArrowRight className="ml-2 size-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
          onClick={() => navigate('/contact')}
        >
          Schedule a Demo
        </Button>
      </div>
      <p className="text-sm text-primary-foreground/80 mt-4">
        No credit card required. Explore the platform and start fractional investing today.
      </p>
    </motion.div>
  </div>
</section>

<footer className="w-full border-t bg-background/95 backdrop-blur-sm">
  <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      <div className="space-y-4">
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            T
          </div>
          <span>TTREX</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Own fractions of world-famous properties through NFTs. Trade, govern, and earn from real estate with TTREX.
        </p>
        <div className="flex gap-4">
          <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">Facebook</span>
            {/* Facebook Icon SVG */}
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">Twitter</span>
            {/* Twitter Icon SVG */}
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">LinkedIn</span>
            {/* LinkedIn Icon SVG */}
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-sm font-bold">Product</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link to="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="#marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="#governance" className="text-muted-foreground hover:text-foreground transition-colors">
              Governance
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-sm font-bold">Resources</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
          </li>
          <li>
            <Link to="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
              Guides
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-sm font-bold">Company</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} TTREX. All rights reserved.
      </p>
      <div className="flex gap-4">
        <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Terms of Service
        </Link>
        <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Cookie Policy
        </Link>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
