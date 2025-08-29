import * as React from "react"
import { useConnect } from "wagmi"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger><Button> Connect Your Wallet </Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Available Wallets</DropdownMenuLabel>
        
        {connectors
          .map((connector) => (
            <DropdownMenuItem  key={connector.uid}>
              <button
                onClick={() => connect({ connector })}
                className="w-full cursor-pointer text-left"
              >
                {connector.name}
              </button>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
