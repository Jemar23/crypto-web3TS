import React from 'react';
import { GetStaticProps } from 'next';

function SolanaTwitter({data}) {
    console.log(data)
    return(
        <div className="bg-gray-900 h-screen">
            
        </div>  
    ) 
}

const token = process.env.BEARER_TOKEN
export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }
    const res = await fetch('https://api.twitter.com/2/users/783214/tweets?exclude=replies', options)
    const data  = await res.json()

    return {
        props: {
            data
        },
    }
}

export default SolanaTwitter; 