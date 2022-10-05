import React from 'react';
import Image from 'next/image'

function FeatureOne({ data }: {data: any}) {
    console.log(data)
    return(
        <div className="bg-slate-600 mx-auto overflow-auto h-screen">
            <h1 className="text-center text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
              Bored Ape Yacht Club
            </h1>
            <div className="text-center text-5xl md:text-[1rem] leading-normal font-extrabold text-gray-400">
            <p>{data.collection.description}</p>
            <p>Current Floor Price: {data.collection.stats.floor_price} ETH</p>
            <p>Unique Owners: {data.collection.stats.num_owners}</p>
            <p>Total Sales: {data.collection.stats.total_sales}</p>
            </div>
            <div> <LargestSale /> </div>
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
        width={400}
        height={400} 
        />
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
