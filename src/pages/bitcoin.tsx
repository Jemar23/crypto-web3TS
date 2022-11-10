import { GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Image from 'next/image';



export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json'}
    }
    const res = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot', options)
    const data  = await res.json()

    return {
        props: {
            data
        },
    }
}

function BitCoin({ data }: GetStaticProps) {
    return(
        <div className="backdrop-blur-lg bg-[url('https://data.1freewallpapers.com/download/triangle-solid-black-gold-4k-abstract.jpg')] bg-no-repeat bg-cover h-screen">
            <div className="backdrop-blur-lg h-screen">
            <Link href="/solana" passHref>
                <Prev />
            </Link>

            <Link href="/ethereum" passHref>
            <MyButton />
            </Link> 
          <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
           <div className="text-center"> 
                  <h1 className="text-center text-3xl md:text-[3rem] leading-normal font-extrabold text-slate-300">Bitcoin</h1>
                </div>
              <div id="inventory" className="flex items-center justify-center text-center h-96 bg-gradient-to-r from-black via-amber-600 to-gray-500 rounded-md border border-slate-700 shadow-lg overflow-hidden">
              <Image 
              className="w-24 rounded-full" 
              src= "https://i.pinimg.com/originals/ca/1b/79/ca1b79af209cb5d3935bddb1513ba220.jpg"
              width={120}
              height={80}
              alt="Logo" /> 
                <h1 className="text-3xl leading-normal font-extrabold p-4">${data.data.amount}</h1>
          </div>
          <TwitterTimelineEmbed
                sourceType="profile"
                screenName="BTCTN"
                options={{height: 400}}
               />
          </div>
      </div>
    </div>
    )
}


const MyButton = React.forwardRef(({ onClick, href }: {onClick: React.MouseEventHandler<HTMLAnchorElement>, href: string}, ref: React.LegacyRef<HTMLAnchorElement>) => {
    return (
        <div className="text-slate-300 text-xl absolute top-6 right-12 h-16 w-16 font-semibold animate-bounce">
      <a href={href} onClick={onClick} ref={ref}>
        Ethereum
      </a>
      </div>
    )
  })

  MyButton.displayName = 'MyComponent';

  const Prev = React.forwardRef(({ onClick, href }: {onClick: React.MouseEventHandler<HTMLAnchorElement>, href: string}, ref: React.LegacyRef<HTMLAnchorElement>) => {
    return (
        <div className="text-slate-300 text-xl absolute left-6 top-6 h-16 w-16 font-semibold animate-bounce">
      <a href={href} onClick={onClick} ref={ref}>
        Prev
      </a>
      </div>
    )
  })

  Prev.displayName = 'Component';

export default BitCoin;