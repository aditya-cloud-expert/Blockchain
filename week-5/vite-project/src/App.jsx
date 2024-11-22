import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './Airdrop';

import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/M67QZVZmh5utc6fOdeGJzzhkzc5iYneL"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <Airdrop />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );wallets
}

export default App;
