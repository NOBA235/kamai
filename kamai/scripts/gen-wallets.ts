// Creates 3 throwaway TESTNET wallets (A=poster, B=confirmer, C=griefer) in .env.local. Prints addresses only.
import { existsSync, writeFileSync } from "node:fs";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

if (existsSync(".env.local")) { console.log(".env.local exists — not overwriting."); process.exit(0); }
const keys = { KEY_A: generatePrivateKey(), KEY_B: generatePrivateKey(), KEY_C: generatePrivateKey() };
writeFileSync(".env.local", Object.entries(keys).map(([k, v]) => `${k}=${v}`).join("\n") + "\nTIRAMISU_API_KEY=\n");
for (const [k, v] of Object.entries(keys)) console.log(k, privateKeyToAccount(v).address);
console.log("\nNext: claim faucet for KEY_A's address at https://hub.arkiv.network/faucet, then `npm run fund`.");
