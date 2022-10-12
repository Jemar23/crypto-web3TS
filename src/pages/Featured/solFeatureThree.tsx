import React from 'react';
import Image from 'next/image'

function SolFeatureThree({ data }: {data: any}) {
    return(
        <div className="bg-black mx-auto overflow-auto h-screen">
            <h1 className="text-center text-5xl md:text-[5rem] leading-normal font-extrabold text-white">
              Cets on Crack
            </h1>
            <div className="text-center text-5xl md:text-[1.3rem] sm:text-[1rem] leading-normal font-extrabold text-white">
            <p>{data.collection.description}</p>
            <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12">
            <p>Total Sales: <span className="text-slate-100">{data.collection.stats.total_sales} </span></p>
            <p>Unique Owners: <span className="text-slate-100">{data.collection.stats.num_owners}</span></p>
            <p>Current Floor Price: <span className="text-slate-100">{data.collection.stats.floor_price} SOL</span></p>
            <p>Largest Sale: <span className="text-slate-100">Cet #5761 sold for $28,000 USD</span></p>
            </div>
            </div>
            <div> <LargestSale /> </div>
            <OpenSeaButton />
        </div>
    ); 
}

function LargestSale() {
    return(
        <div className="flex justify-center">
        <Image
        className="rounded-lg"
        src="https://i.seadn.io/gae/YwGtBd48E23kVgmW9_hlNEOfIDe2Onle_TU0_rgxn8CK3ZV9U4uzrPQljlDRZQxkbQ6yMWY3yR2kLSOnW9Exy8eqmXjxX70Ws6pODw?auto=format&w=1000"
        alt="NFT Image"
        width={600}
        height={600} 
        />
        </div>
    );
}

function OpenSeaButton() {
    return(
        <div className="flex justify-center">
            <button>View on Opensea</button>
        </div>
    );
}



export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-API_KEY': process.env.API_KEY}
    }

    const res = await fetch('https://api.opensea.io/api/v1/collection/cets-on-creck', options)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

export default SolFeatureThree;