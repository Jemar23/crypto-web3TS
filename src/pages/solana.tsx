import { GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';


export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json'}
    }
    const res = await fetch('https://api.coinbase.com/v2/prices/SOL-USD/spot', options)
    const data  = await res.json()

    return {
        props: {
            data
        },
    }
}


function Prices({ data }: GetStaticProps) {
    return(
        <div className="backdrop-blur-lg bg-[url('https://cdn.pixabay.com/photo/2016/10/15/02/19/purple-1741713__340.jpg')] bg-no-repeat bg-cover h-screen">
            <div className="backdrop-blur-lg h-screen">
           <Link href="/bitcoin" passHref>
            <MyButton />
            </Link>

            <Link href="/menu" passHref>
            <Menu />
            </Link> 
          <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12 text-lg text-black">
           <div className="text-center"> 
                  <h1 className="text-3xl">Solana</h1>
                </div>
              <div id="inventory" className="flex items-center justify-center text-center h-96 bg-gradient-to-r from-pink-400 via-purple-600 to-teal-500 rounded-md border border-slate-700 shadow-lg overflow-hidden">
              <img className="w-24 rounded-full" src="https://www.economywatch.com/wp-content/uploads/2021/06/solana-1.jpg" /> 
                <h1 className="text-3xl p-4">${data.data.amount}</h1>
          </div>
          </div>
      </div>
    </div>
    )
}

const Menu = React.forwardRef(({ onClick, href }, ref) => {
  return (
      <div className="text-black text-xl absolute left-6 top-6 h-16 w-16 font-semibold animate-bounce">
    <a href={href} onClick={onClick} ref={ref}>
      Menu
    </a>
    </div>
  )
})

Menu.displayName = 'TheComponent';

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <div className="text-black text-xl absolute top-6 right-6 h-16 w-16 font-semibold animate-bounce">
      <a href={href} onClick={onClick} ref={ref}>
        Bitcoin
      </a>
      </div>
    )
  })

  MyButton.displayName = 'MyComponent';

export default Prices;