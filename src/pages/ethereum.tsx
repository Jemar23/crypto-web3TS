import { GetStaticProps } from 'next'
import React from 'react';
import Link from 'next/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Image from 'next/image';



export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json'}
    }
    const res = await fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot', options)
    const data  = await res.json()

    return {
        props: {
            data
        },
    }
}

function Ethereum({ data }: GetStaticProps) {
    return(
        <div className="backdrop-blur-lg bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')] bg-no-repeat bg-cover h-screen">
            <div className="backdrop-blur-lg h-screen">
             <Link href="/bitcoin" passHref>
                <Prev />
            </Link>

            <Link href="/menu" passHref>
            <MyButton />
            </Link>  
          <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-slate-300">
           <div className="text-center"> 
                  <h1 className="text-center text-3xl md:text-[3rem] leading-normal font-extrabold text-slate-300">Ethereum</h1>
                </div>
              <div id="inventory" className="flex items-center justify-center text-center h-96 bg-gradient-to-r from-black via-slate-800 to-indigo-400 rounded-md border border-slate-700 shadow-lg overflow-hidden">
              <Image 
              className="w-24 rounded-full" 
              src= "https://orionx.net/wp-content/uploads/2018/04/Ethereum-logo-black-888x500.jpg"
              width={200}
              height={200}
              alt="Logo" /> 
                <h1 className="text-3xl leading-normal font-extrabold p-4">${data.data.amount}</h1>
          </div>
             <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ethereum"
                options={{height: 400}}
               />
          </div>
      </div>
    </div>
    )
}

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <div className="text-slate-300 text-xl absolute top-6 right-6 h-16 w-16 font-semibold animate-bounce">
      <a href={href} onClick={onClick} ref={ref}>
        Menu
      </a>
      </div>
    )
  })

  MyButton.displayName = 'MyComponent';

  const Prev = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <div className="text-slate-300 text-xl absolute left-6 top-6 h-16 w-16 font-semibold animate-bounce">
      <a href={href} onClick={onClick} ref={ref}>
        Prev
      </a>
      </div>
    )
  })

  Prev.displayName = 'Component';

export default Ethereum;