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
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-center text-3xl font-bold mb-6">Why Advertise with Big Easy Magazine?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-center text-2xl font-semibold">Promote Your Brand</h3>
                <p className="text-justify">Advertising with us puts your business or service front and center on a site that is quickly growing and focused on issues that matter. Let us send potential customers to your website or Facebook page 24/7! Whenever our readers are online with us, they can be online with you! So, Advertise with Big Easy Magazine, which allows your business to reach a large number of potential customers and provides maximum value for the cost spent!</p>
              </div>

              <div>
                <h3 className="text-center text-2xl font-semibold">Progressive Thinking</h3>
                <p className="text-justify">If you've heard it once, you've heard it a thousand times: <em>Big Easy Magazine is Unapologetically Progressive</em>. And so is our audience. Our readers support businesses doing right by our community and our world, so if this describes you, let's work together!</p>
              </div>

              <div>
                <h3 className="text-center text-2xl font-semibold">Affordable Rates</h3>
                <p className="text-justify">If you are looking for <a href="https://bigeasymagazineleads.wordpress.com/" className="text-blue-500 hover:text-blue-700">advertising in New Orleans</a>, then advertise with Big Easy Magazine. We enjoy working with New Orleans area businesses, and we're happy to serve as an affordable platform for you to promote your message. You can be online for less than $2 per day with long-term frequency, so why wait? Contact <strong>Evangeline Barber Ploof</strong> at <a href="mailto:evangeline@bigeasymagazine.com" className="text-blue-500 hover:text-blue-700">evangeline@bigeasymagazine.com</a> to start the conversation.</p>
                <p className="text-center"><img className="mx-auto" src="https://www.bigeasymagazine.com/wp-content/uploads/2021/01/Ad-rates-pic2.png" alt="Advertise with Big Easy Magazine" width="548" height="703" /></p>
                <p className="mt-3 text-center">Need help designing your ad? No problem, just ask and we can work together to create the best ad for your business!</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Advertise;
