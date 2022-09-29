import Image from 'next/image'

function ranks() {
    return(
        <div className="bg-slate-600 mx-auto overflow-auto h-full">
            <h1 className="text-center text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
            Featured <span className="text-blue-600">Ethereum</span> NFT Projects
            </h1>
            <NumberOne />
            <NumberTwo />
            <NumberThree />
        </div>
    );
}

function NumberOne() {
    return(
        <div className="text-left text-5xl md:text-[5rem] leading-normal font-extrabold w-4/12 flex flex-row items-center justify-between p-6 text-white">
        <div className="p-4">#1</div>
        <Image
        className="rounded-lg"
        src="https://img.seadn.io/files/dc3dfb11937d08b325f593a3c8416106.png?fit=max&w=1000"
        alt="NFT Image"
        width={400}
        height={400} 
        />
        <div className="text-3xl">
        <button className="p-4">Info</button>
        </div>
        </div>
    );
}

function NumberTwo() {
    return(
        <div className="text-left text-5xl md:text-[5rem] leading-normal font-extrabold w-4/12 flex flex-row items-center justify-between p-6 text-white">
        <div className="p-4">#2</div>
        <Image
        className="rounded-lg"
        src="https://lh3.googleusercontent.com/7P35vXVrHWgtYIQD1DGUXAorvlkSYqhItws56KGsNFBd66dAOHgicXdD4DgF2wXZFkio5SMDoz3YWJo1usCJVJC2XVw1epnYgGah=w1000"
        alt="NFT Image"
        width={400}
        height={400} 
        />
        <div className="text-3xl">
        <button className="p-4">Info</button>
        </div>
        </div>
    );
}

function NumberThree() {
    return(
        <div className="text-left text-5xl md:text-[5rem] leading-normal font-extrabold w-4/12 flex flex-row items-center justify-between p-6 text-white">
        <div className="p-4">#3</div>
        <Image
        className="rounded-lg"
        src="https://img.seadn.io/files/3c005b0204734b168dcf77c4d244dbb7.png?fit=max&w=1000"
        alt="NFT Image"
        width={400}
        height={400} 
        />
        <div className="text-3xl">
        <button className="p-4">Info</button>
        </div>
        </div>
    );
}
export default ranks;