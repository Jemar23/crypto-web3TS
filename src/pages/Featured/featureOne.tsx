import React from 'react';
import Image from 'next/image';
import { OpenSeaStreamClient } from '@opensea/stream-js';


// const KEY = process.env.API_KEY;
// const client = new OpenSeaStreamClient({
//     token: `${KEY}`,
//   });


function FeatureOne({ data }: {data: any}) {
    return(
        <div className="bg-slate-600 mx-auto overflow-auto h-screen">
            <h1 className="text-center text-4xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
              Bored Ape Yacht Club
            </h1>
            <div className="text-center text-1xl md:text-[1.3rem] sm:text-[1rem] leading-normal font-extrabold text-slate-300">
            <p>{data.collection.description}</p>
            <div className="container mx-auto px-14 w-2/3 space-y-4 pt-12">
            <p>Total Sales: <span className="text-slate-100">{data.collection.stats.total_sales} </span></p>
            <p>Unique Owners: <span className="text-slate-100">{data.collection.stats.num_owners}</span></p>
            <p>Current Floor Price: <span className="text-slate-100">{data.collection.stats.floor_price} ETH</span></p>
            <p>Largest Sale: <span className="text-slate-100">Bored Ape #8817 sold for $3.4 million USD</span></p>
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
        src="https://img.seadn.io/files/0bf933d1c6cd84baebeeb1d3aec73996.png?fit=max&w=1000"
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

    const res = await fetch('https://api.opensea.io/api/v1/collection/boredapeyachtclub', options)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

export default FeatureOne;
