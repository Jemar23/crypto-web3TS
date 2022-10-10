import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Solranks() {
    return(
        <div className="bg-black mx-auto overflow-auto h-screen">
            <Link href="/menu" passHref>
            <MyButton />
            </Link>
            <h1 className="text-center text-5xl md:text-[5rem] leading-normal font-extrabold text-slate-300">
            Featured <span className="text-fuchsia-500">Solana</span> NFT Projects
            </h1>
            <NumberOne />
            <NumberTwo />
            <NumberThree />
        </div>
    );
}

function NumberOne() {
    return(
        <div className="text-left text-5xl md:text-[5rem] leading-normal font-extrabold flex flex-row items-center justify-start p-6 text-white">
        <div className="p-4">#1</div>
        <Image
        className="rounded-lg"
        src="https://i.seadn.io/gae/iGebuKW3yYgemArpA_ZiL92Ab5UBpSm7EdEyLdtIV2U7EHOc-vfcT_6E_PjLZAixUtZPgICIMZMnkNgMSJ80tZOmKxRAXeyACRaMDg?auto=format&w=1000"
        alt="NFT Image"
        width={400}
        height={400} 
        />
        <div className="text-3xl pl-4">
        <Link href="/Featured/solFeatureOne" className="p-4">Info</Link>
        </div>
        </div>
    );
}

function NumberTwo() {
    return(
        <div className="text-left text-5xl md:text-[5rem] leading-normal font-extrabold flex flex-row items-center justify-start p-6 text-white">
        <div className="p-4">#2</div>
        <Image
        className="rounded-lg"
        src="https://i.seadn.io/gae/F9nWNgjHWxUsY3Zjkbyki4Vl2p2F15fBpr7hWmHhtEazi3ftjvaIO6M8BgO9NtTnUWJrqpBpDAjcNWCC6UhVpEaBb2CWpxHgLR8V6aQ?auto=format&w=1000"
        alt="NFT Image"
        width={400}
        height={400} 
        />
        <div className="text-3xl pl-4">
        <Link href="" className="p-4">Info</Link>
        </div>
        </div>
    );
}

function NumberThree() {
    return(
        <div className="text-left text-5xl md:text-[5rem] leading-normal font-extrabold flex flex-row items-center justify-start p-6 text-white">
        <div className="p-4">#3</div>
        <Image
        className="rounded-lg"
        src="https://i.seadn.io/gae/l5TS4krKj01qB7MFxnN6oDVNKDXfKjgG3HxUBv8uFL7_BNHYr_QK1VYRJ800zkPpf4g3bRp5kjg2V-5o_nie6AbH-d3117QopbtDLA?auto=format&w=1000"
        alt="NFT Image"
        width={400}
        height={400} 
        />
        <div className="text-3xl pl-4">
        <Link href="" className="p-4">Info</Link>
        </div>
        </div>
    );
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
export default Solranks;