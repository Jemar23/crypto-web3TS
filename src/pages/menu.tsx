import Link from 'next/link'
import Image from 'next/image'

function Menu() {
    return(
        <div className="bg-slate-900 h-screen">
            <Nav />
        </div>
    )
}


function Nav() {
    return(
    <div className="bg-black text-white p-4 flex flex-col text-xl absolute inset-y-0 left-0 w-64 place-content-evenly">
        <Image
        src="https://lh3.googleusercontent.com/-j8nIV5iv0V0MF4T1FLp7XpZm_P4C1BdNV8QQMUFpaxdiDdXOMdkxFgjRaPGgYnN_I4DlSdRNo79pJtig7esjFjc3R4F3F39jXTt=w600"
        alt="NFT Image"
        width={600}
        height={600} 
        />
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">MarketPlaces</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Crypto Prices</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Check Profits</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">daisyUI</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">daisyUI</a></Link>
        <Link href="/"><a className="text-gray-100 p-2 rounded-full font-medium text-lg hover:bg-blue-500 focus:bg-gray-200 focus:shadow-outline">Logout</a></Link>
    </div>
    );
}

export default Menu;