import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";

const Sports = () => {
  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center h-full mt-20">
        <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
          maxWidth: '1460px',
          marginTop: '275px' 
        }}>
          
        </div>
      </main>
    </>
  );
};

export default Sports;
