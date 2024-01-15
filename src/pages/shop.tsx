import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center h-full mt-20">
        <div className="bg-purple-950 w-full h-full" style={{
          maxWidth: '1460px',
          marginTop: '275px',
          display: 'flex', // Enable Flexbox
          alignItems: 'center', // Vertically center
          justifyContent: 'center', // Horizontally center
        }}>
          <div style={{ height: '275px' }} className="">
            <img className="logo" style={{ maxHeight: '100%' }} src="https://www.bigeasymagazine.com/wp-content/uploads/2018/05/big-easy-main-logo-1.png" alt="Big Easy Magazine Logo" />
          </div>
          <h1 className="text-slate-200" style={{ margin: 200 }}>COMING SOON!</h1> {/* Remove default margin */}
        </div>
      </main>
    </>
  );
};

export default Shop;
