import React, { useState } from 'react';
import Link from 'next/link'

function CheckProfits() {
    const [buy, setBuy] = useState("")
    const [sell, setSell] = useState("")
    const [profit, setProfit] = useState(0)
    const [total, setTotal] = useState("")

    const calculate = () => {
        const calculation = (sell - buy);
        setProfit(calculation)

        const total = getTotal(calculation)
        setTotal(total)
    }

    function getTotal(calculation: number): string {
        if (calculation > 0) {
            return "Awesome you made a profit!"
        } else if (calculation === 0) {
            return "well... at least you didn't take a loss"
        } else {
            return "Hold this L...smh"
        }
    }

    return(
        <div className="flex justify-center py-64 text-white bg-[url('https://pbs.twimg.com/media/FWTc6XyVsAA-Mks?format=jpg&name=4096x4096')] bg-no-repeat bg-cover h-screen">
            <Back />
            <div className="p-6 rounded-lg  bg-slate-800">
        <form>
        <h1 className="text-center text-2xl">${profit}</h1>
        <h1 className="p-2 text-center text-2xl">{total}</h1>
        <div className="form-group mb-6">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
        value={buy}
        onChange={e => setBuy(e.target.value)}
        placeholder="NFT Buy Price"/>
        </div>
         <div className="form-group mb-6">
        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
        value={sell}
        onChange={e => setSell(e.target.value)}
        placeholder="NFT Sell Price"/>
    </div>
    <button type="button" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      onClick={calculate}
      >calculate Profit</button>
            </form>
        </div>
    </div>
    )
}


function Back() {
    return(
        <div className="text-black text-center text-lg backdrop-blur-lg bg-white/30 rounded-full border-solid border-purple-700 border-2 absolute left-4 top-4 h-16 w-24 p-2">
            <Link href="/menu"><a>Prev</a></Link>
        </div>
    )
}

export default CheckProfits;