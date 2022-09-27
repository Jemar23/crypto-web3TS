import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { trpc } from "../utils/trpc";

interface FormData {
  userName: string;
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const { register, handleSubmit, formState: { error } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  const router = useRouter();

  return (
    <>
      <Head>
        <title>NFT Profit Manager</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-500 ">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Enter Into the <span className="text-blue-600">NFT</span> World
        </h1>

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form onSubmit={onSubmit}>
          <div className="w-full max-w-md space-y-8">
          <input className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"  placeholder="Username"{...register("userName")} />
          <input className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" type="email"  placeholder="Email address" {...register("password")} />
          <input className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" type="password"  placeholder="Password" {...register("email")} />
          <button 
          type="button"
          onClick={() => router.push('/menu')}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Submit
            </button>
            
        </div>
        </form>
        </div>
        <div>
          Hello
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;


 
