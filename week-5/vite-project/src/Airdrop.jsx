import React, { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState(1); // Default amount in SOL

    async function sendAirdropToUser() {
        if (!wallet.publicKey) {
            console.error('No wallet connected!');
            return;
        }

        try {
            const lamports = amount * 10; // Convert SOL to lamports
            const signature = await connection.requestAirdrop(wallet.publicKey, lamports);
            console.log('Airdrop transaction signature:', signature);
        } catch (error) {
            console.error('Airdrop failed:', error);
        }
    }

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Amount in SOL"
            />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    );
}
