import { http, createConfig } from 'wagmi'
import { base, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
export const config = createConfig({
  chains: [sepolia, base],
  connectors: [
    injected(),     
  ],
  transports: {
    [sepolia.id]: http(),
    [base.id]: http(),
  },
})