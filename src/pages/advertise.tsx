import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";

const Advertise = () => {
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
          <h2>Why Advertise with Big Easy Magazine?</h2>



          <h3><strong>Promote Your Brand</strong></h3>
          <p>Advertising with us puts your business or service front and center on a site that is quickly growing and focused on issues that matter. Let us send potential customers to your website or Facebook page 24/7! Whenever our readers are online with us, they can be online with you! So, Advertise with Big Easy Magazine, which allows your business to reach a large number of potential customers and provides maximum value for the cost spent!</p>



          <h3><strong>Progressive Thinking</strong></h3>
          <p>If you've heard it once, you've heard it a thousand times: <em>Big Easy Magazine is Unapologetically Progressive</em>. And so is our audience. Our readers support businesses doing right by our community and our world, so if this describes you, let's work together!</p>



          <h3><strong>Affordable Rates </strong></h3>
          <p>If you are looking for <a href="https://bigeasymagazineleads.wordpress.com/">advertising in New Orleans</a>, then advertise with Big Easy Magazine. We enjoy working with New Orleans area businesses, and we're happy to serve as an affordable platform for you to promote your message. You can be online for less than $2 per day with long-term frequency, so why wait? Contact <strong>Evangeline Barber Ploof </strong>at <a href="mailto:evangeline@bigeasymagazine.com">evangeline@bigeasymagazine.com</a> to start the conversation.</p>
          <p><a href="https://www.bigeasymagazine.com/wp-content/uploads/2021/01/Ad-rates-pic2.png"><img className="aligncenter size-full" src="https://www.bigeasymagazine.com/wp-content/uploads/2021/01/Ad-rates-pic2.png" alt="Advertise with Big Easy Magazine" width="548" height="703" /></a></p>
          <p>Need help designing your ad? No problem, just ask and we can work together to create the best ad for your business!</p>

        </div>
      </main>
    </>
  );
};

export default Advertise;
