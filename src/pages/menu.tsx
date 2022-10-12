import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next'
import { useSession, getSession, signOut } from "next-auth/react"
import { trpc } from "../utils/trpc";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  Metric,
  ProgressBar,
  Text,
  Flex,
} from '@tremor/react';

function Progress() {
  const { data: session } = useSession()
  const profitQuery = trpc.useQuery(["example.getTotal", {id: session?.user?.id}])
  const profit = profitQuery.data?.getter?.total as number;
  const calc = (profit / 10000) * 100

  return(
    <div>
      <Card>
      <Text>One Year Profit Challenge!</Text>
            <Metric>${profitQuery.data?.getter?.total}</Metric>
            <Flex marginTop="mt-4">
            <Text truncate={ true }>{ `${calc}% ($${profitQuery.data?.getter?.total as number})` }</Text>
                <Text>{ 10000 }</Text>
            </Flex>
          <ProgressBar percentageValue={calc} marginTop="mt-2" />
      </Card>
    </div>
  );
}

interface IFormInput {
  buy: number
  sell: number
}

function GetFormData() {
  const { data: session } = useSession()
  const utils = trpc.useContext();
  const updateProfit = trpc.useMutation(["example.addTotal"])
  const { register, handleSubmit } = useForm<IFormInput>(); 
  const [buyPrice, setBuyPrice] = useState<string>("")
  const [sellPrice, setSellPrice] = useState<string>("")
  // OnSubmit should mutate data in DB
  const onSubmit: SubmitHandler<IFormInput> = () => {
     updateProfit.mutate({
        id: session?.user?.id,
        buy: buyPrice,
        sell: sellPrice
     },
     {
      onSuccess: () => {
        utils.invalidateQueries()
      }
     }
     );
  };

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="text-center text-3xl md:text-[2rem] leading-normal font-extrabold text-gray-700 flex justify-between">Buy Price</label>
      <input {...register("buy")} 
      className="text-center text-3xl md:text-[2rem] h-40 bg-transparent rounded-md border border-slate-700 shadow-lg overflow-auto"
      value={buyPrice}
      onChange={(e)=> setBuyPrice(e.target.value)}  />
      </div>
      <div className="w-full md:w-1/2 px-3">
      <label className="text-center text-3xl md:text-[2rem] leading-normal font-extrabold text-gray-700 flex justify-between">Sell Price</label>
      <input {...register("sell")} 
      className="text-center text-3xl md:text-[2rem] h-40 bg-transparent rounded-md border border-slate-700 shadow-lg overflow-auto"
      value={sellPrice} 
      onChange={(e)=> setSellPrice(e.target.value)}/>
      <input className="text-center text-3xl md:text-[2rem] leading-normal font-extrabold bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full" type="submit" />
      </div>
    </form>
    </div>  
  );
}

function Menu() {
    return(
        <div className="bg-slate-900 h-screen">
            <Nav />
            <div className="mx-auto overflow-auto h-full">   
                <Contain />  
            </div>
        </div>
    )  
}

function Nav() {
  const { data: session } = useSession()
    return(
    <div className="bg-black text-white font-extrabold text-center p-4 flex flex-col text-xl absolute inset-y-0 left-0 w-64 place-content-evenly">
      Hello {session?.user?.name}!
        <Image
        className="rounded-full"
        src="https://lh3.googleusercontent.com/-j8nIV5iv0V0MF4T1FLp7XpZm_P4C1BdNV8QQMUFpaxdiDdXOMdkxFgjRaPGgYnN_I4DlSdRNo79pJtig7esjFjc3R4F3F39jXTt=w600"
        alt="NFT Image"
        width={600}
        height={600} 
        />
        <Link href="/marketplace"><a className="text-gray-100 p-2 rounded-full font-bold text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">MarketPlaces</a></Link>
        <Link href="/solana"><a className="text-gray-100 p-2 rounded-full font-bold text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Crypto Prices</a></Link>
        <Link href="/checkprofit"><a className="text-gray-100 p-2 rounded-full font-bold text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Check Profits</a></Link>
        <Link href="/Collections/topEth"><a className="text-gray-100 p-2 rounded-full font-bold text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Top Ethereum NFT's</a></Link>
        <Link href="/Collections/topSolana"><a className="text-gray-100 p-2 rounded-full font-bold text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Top Solana NFT's</a></Link>
        <button onClick={() => signOut({callbackUrl: '/'})} className="text-gray-100 p-2 rounded-full font-bold text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Signout</button>
        </div>
    );
}

function Contain() {
  const { data: session } = useSession()
  const profitQuery = trpc.useQuery(["example.getTotal", {id: session?.user?.id}])
  
    return (
      <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300"> 
          <Progress />
        <div className="flex items-center justify-center text-center h-fit bg-transparent rounded-md border border-slate-700 shadow-lg overflow-auto">  
           <WalletConnect />   
        </div> 
        <div className="text-center text-5xl md:text-[3rem] leading-normal font-extrabold text-gray-700">Total Profit Earned</div>
        <div className="text-center text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        ${profitQuery.data?.getter?.total}
        </div>
        <div className="grid grid-cols-2 gap-4">
        <GetFormData />
        </div>
      </div>
    ); 
  }

  function WalletConnect() {
    const [walletAddress, setWalletAddress] = useState(null)
    const [walletNft, setWalletNft] = useState([])

    const connectWallet = async () => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const accountRequest = await window.ethereum.request({ method: 'eth_requestAccounts' });

        setWalletAddress(accountRequest[0])
      }
    }

    const getNftData = async () => {
      if(!walletAddress) return;

      const options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-API-KEY': '3953aeb7eb99428fb5e561bc416e85ba'}
      };
      
      const res: any = await fetch(`https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&limit=20&include_orders=false`, options)
        .then(response => response.json())
        .then(({ assets }) => {
          assets.forEach((attributes: ImageData) => {
            document.getElementById("container").append(renderImageData(attributes))
          })
        })
        .then(response => console.log(response)) 
        .catch(err => console.error(err));

        const data = await res?.json() 

        setWalletNft(data?.assets)
    }

    interface ImageData { 
      name: string,
      description: string,
      permalink: string,
      image_preview_url: string
    }

    const renderImageData = ( { name, description, permalink, image_preview_url}: ImageData ) => {
      const newElement = document.getElementById("temp").cloneNode(true)

      newElement.querySelector("h1").innerText = name
      newElement.querySelector("a").href = permalink
      newElement.querySelector("img").src = image_preview_url
      newElement.querySelector("img").alt = description

      return newElement
    }

    useEffect(() => {
        getNftData();
    }, [walletAddress])

  return(
    <div>
       <div className="text-center">
        {/* Account: {walletAddress} */}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded-full" onClick={connectWallet}>
        Connect Wallet
    </button>
     <Container nft={walletNft}/>  
    </div>
  );
}

function Container() {
  return (
    <div id="container" className="text-white grid grid-cols-4 gap-4">   
      <div id="temp" className="">
        <h1 className="text-center"></h1>
        <a target="_blank">
        <Image src="" alt="" />  
        </a>
        </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } 

  return {
    props: {
      session
    }
  }
}
  
export default Menu;