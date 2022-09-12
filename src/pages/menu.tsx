import React, { useState } from 'react';
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID 
    }
  }
};

function Menu() {
    return(
        <div className="bg-slate-900 h-screen">
            <Nav />
            <div>
                <Contain />
                {/* <Connect /> */}
            </div>
        </div>
    )
}


function Nav() {
    return(
    <div className="bg-black text-white text-center p-4 flex flex-col text-xl absolute inset-y-0 left-0 w-64 place-content-evenly">
      NFT Profit Manager
        <Image
        className="rounded-full"
        src="https://lh3.googleusercontent.com/-j8nIV5iv0V0MF4T1FLp7XpZm_P4C1BdNV8QQMUFpaxdiDdXOMdkxFgjRaPGgYnN_I4DlSdRNo79pJtig7esjFjc3R4F3F39jXTt=w600"
        alt="NFT Image"
        width={600}
        height={600} 
        />
        <Link href="/marketplace"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">MarketPlaces</a></Link>
        <Link href="/solana"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Crypto Prices</a></Link>
        <Link href="/checkprofit"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Check Profits</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">daisyUI</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">daisyUI</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Logout</a></Link>
    </div>
    );
}

function Contain() {
    return (
      <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
        <div className="flex items-center justify-center text-center h-fit bg-black rounded-md border border-slate-700 shadow-lg overflow-hidden">
          Data
          <Connect />
        </div>
      </div>
    );
  }

  // export async function getStaticProps() {
  //   // const [walletNft, setWalletNft] = useState<string[]>([])
  //    const walletAddress = null


  //     const options = {
  //       method: 'GET',
  //       headers: {Accept: 'application/json', 'X-API-KEY': process.env.API_KEY}
  //     };

  //   const res = await fetch(`https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&limit=20&include_orders=false`, options)
  //   const data = await res.json()

  //   return {
  //     props: {
  //       data
  //     }
  //   }
  // }

  function Connect() {
  
    // const [walletAddress, setWalletAddress] = useState(null)
  
    // const connectWallet = async () => {
    //   if (typeof window.ethereum !== 'undefined') {
    //     console.log('MetaMask is installed!');
    //     const accountRequest = await window.ethereum.request({ method: 'eth_requestAccounts' });

    //     setWalletAddress(accountRequest[0])
    //   }
    // }
    // // if(!walletAddress) return;
    return (
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={async () => {
           if (typeof window !== 'undefined') {
            const web3Modal = new Web3Modal({
              network: "mainnet", 
              cacheProvider: true,
              providerOptions 
            });
          }
          const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
        }}>
        Connect Wallet
       </button>
      </div>
    )
  }

export default Menu;