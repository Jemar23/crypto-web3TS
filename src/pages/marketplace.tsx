
interface markets {
    image: string
    title: string
    website: string
}

const marketplaces: markets[] = [
    { image: 'https://brasilnft.art.br/pytsycky/2021/09/OpenSea-Ex-PNG.png', title: 'OpenSea', website: 'https://opensea.io/'}, 
    { image: 'https://pbs.twimg.com/profile_images/1554554723423993857/owxazkRR_400x400.jpg', title: 'MagicEden', website: 'https://www.magiceden.io/'}, 
    { image: 'https://pbs.twimg.com/profile_images/1473493606748942338/l-Q8oVDV_400x400.png', title: 'NBATopShot', website: 'https://nbatopshot.com/'}, 
    { image: 'https://avatars.githubusercontent.com/u/3613281?s=280&v=4', title: 'LarvaLabs', website: 'https://www.larvalabs.com/'}, 
    { image: 'https://cwstatic.nyc3.digitaloceanspaces.com/4792/Rarible-Logo.jpg?v=1615898522', title: 'Rarible', website: 'https://rarible.com/'}, 
    { image: 'https://pbs.twimg.com/profile_images/1495039475839234052/gN6McV0d_400x400.png', title: 'SuperRare', website: 'https://superrare.com/'}, 
    { image: 'https://www.business2community.com/wp-content/uploads/2022/04/NFT-LaunchPad-logo.png', title: 'NFTLaunchPad', website: 'https://launchpad.xyz/'}, 
    { image: 'https://pbs.twimg.com/profile_images/1480727876517253123/lt1gKNp9_400x400.png', title: 'Crypto', website: 'https://crypto.com/nft/marketplace'}, 
    { image: 'https://pbs.twimg.com/profile_images/1493078398549348353/wTYBW3dP_400x400.png', title: 'FTX', website: 'https://ftx.us/nfts'}, 
    { image: 'https://i.seadn.io/gae/lGUG73YAOrWsgA5YtQ2e9oRiwpv1imwmt-429rCdTm5NLskvsz_W_2qUPdII1AVpQ46opfMEYyAjGxkZQFoH59FcUFUknSv3sLzIWA?auto=format&w=1000', title: 'Coinbase', website: 'https://nft.coinbase.com/'}, 
    { image: 'https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/sites/7/2021/09/MintableLogo_Supplied_250x250.png', title: 'Mintable', website: 'https://mintable.com/'},  
    { image: 'https://images.ctfassets.net/9tp4nbs38ooy/uuLGVJLwkI50InF4EXcnY/e7437b08282b87f5bf0885a735ec7406/logo.png', title: 'Foundation', website: 'https://foundation.app/'}, 
    { image: 'https://pbs.twimg.com/profile_images/1493695753990152194/IhmNLRMK_400x400.png', title: 'NiftyGateway', website: 'https://www.niftygateway.com/'}, 
    { image: 'https://pbs.twimg.com/profile_images/1493172984240308225/Nt6RFdmb_400x400.jpg', title: 'LooksRare', website: 'https://looksrare.org/'},    
]



function MarketPlaces() {
    return(
        <div className="bg-[url('https://content.fortune.com/wp-content/uploads/2022/01/web_FRESHAIR.jpg?w=800&h=919')] bg-no-repeat bg-cover h-full">
            <div className="text-center text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">Browse NFT MarketPlaces!</div>
            <div className="">
                <Markets />
            </div>
        </div>
    )
}

function Markets() {
  
    const marketList = marketplaces.map(market => 
        <a key={market.id} target="_blank" href={market.website} rel="noreferrer">
        <div className="flex items-center justify-center text-center h-96 w-80 bg-transparent backdrop-blur-sm rounded-md border border-slate-700 shadow-lg overflow-hidden text-black hover:bg-blue-50 transition delay-150 duration-300 ease-in-out">
             <div className="w-24">
                 <img className="rounded-lg" src={market.image} alt="" />
                    {market.title}
             </div>
         </div>
         </a>
        )

     return(
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {marketList}
        </div>
     )
 }

export default MarketPlaces;