"use client";
import { useCallback, useState } from "react";
import { numberToHex, type Hex } from "viem";
import { tiramisu } from "@arkiv-network/sdk/chains";
import { browserWalletClient } from "./arkiv";

type Eth = { request(a: { method: string; params?: unknown[] }): Promise<unknown> };
const eth = () => (window as unknown as { ethereum?: Eth }).ethereum;

export function useWallet() {
  const [address, setAddress] = useState<Hex | null>(null);
  const [writer, setWriter] = useState<ReturnType<typeof browserWalletClient> | null>(null);
  const [error, setError] = useState("");

  const connect = useCallback(async () => {
    setError("");
    const p = eth();
    if (!p) return setError("MetaMask not found. Install it, then reload.");
    try {
      const chainId = numberToHex(tiramisu.id);
      try { await p.request({ method: "wallet_switchEthereumChain", params: [{ chainId }] }); }
      catch {
        await p.request({ method: "wallet_addEthereumChain", params: [{
          chainId, chainName: tiramisu.name, nativeCurrency: tiramisu.nativeCurrency,
          rpcUrls: tiramisu.rpcUrls.default.http, blockExplorerUrls: ["https://tiramisu.explorer.arkiv.network"],
        }] });
      }
      const [a] = (await p.request({ method: "eth_requestAccounts" })) as Hex[];
      setAddress(a); setWriter(browserWalletClient(p, a));
    } catch (e) { setError((e as Error).message.slice(0, 160)); }
  }, []);
  return { address, writer, error, connect };
}
