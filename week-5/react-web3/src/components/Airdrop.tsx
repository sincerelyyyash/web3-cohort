import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { FC } from "react";

export const Airdrop: FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  if (!wallet || !connection) {
    return <div>Loading...</div>;
  }

  const sendAirdrop = async () => {
    try {
      if (wallet.publicKey) {
        const airdropSignature = await connection.requestAirdrop(
          wallet.publicKey,
          10 * 10 ** 9
        );
        await connection.confirmTransaction(airdropSignature);
      } else {
        console.log("Wallet public key is not available");
      }
    } catch (error) {
      console.error("Airdrop failed", error);
    }
  };

  return (
    <div>
      <div>Airdrop</div>
      <input type="text" placeholder="Amount" />
      <button onClick={sendAirdrop}>Send Airdrop</button>
    </div>
  );
};

