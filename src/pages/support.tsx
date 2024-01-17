import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";

const Support = () => {
  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center h-full mt-20">
        <div className="bg-slate-200 w-full h-full border-slate-400 border-x p-10" style={{
          maxWidth: '1460px',
          marginTop: '275px'
        }}>
          <script src="https://www.googleoptimize.com/optimize.js?id=GTM-PFMMFMR"></script>
          <h2 className="text-3xl font-bold text-center mb-6">Join the Big Easy Magazine Community</h2>

          <p className="text-justify mb-6">Big Easy Magazine is a publication for the people of New Orleans. Our writers are locals who live New Orleans every day, and our advertisers are local businesses—their support allows us to be free of corporate influence. If you value Big Easy Magazine and the unique look we take at local government, the environment, race, gender, and className, we encourage you to become a member.</p>

          <p className="text-justify mb-6">Maybe you look forward to our original poetry and film reviews—a membership is for you. Do you bleed black and gold and value our Saints coverage each week? And do you consult the Progressive’s Weekend and Progressive Living? We’d love to have you as a member.</p>

          <p className="text-justify mb-6">Our memberships are designed to be affordable for all New Orleanians with varying levels of membership. We’ll charge your credit or debit card monthly to make it as easy as possible for you. We’ll also show our appreciation by thanking you publicly, and we’re pleased to offer the membership benefits below. All Big Easy members allow the progressive stories to be told, and help make our community more inclusive and welcoming for all.</p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">Membership Tiers</h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Reporter’s Circle: $3.00/month</h4>
              <ul className="list-disc list-inside">
                <li>An “Unapologetically Progressive” sticker for your laptop, water bottle, or car.</li>
                <li>A “members only” email each month that features exclusive content.</li>
                <li>A special sneak preview of our monthly edition.</li>
                <li>Advance notification of events, advertisement opportunity, and other ways to connect with Big Easy Magazine.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Editor’s Circle: $5.00/month</h4>
              <ul className="list-disc list-inside">
                <li>Everything included in the “Reporter” package.</li>
                <li>An “Unapologetically Progressive” coffee mug.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">Publisher’s Circle: $10.00/month</h4>
              <ul className="list-disc list-inside">
                <li>Everything included in the “Reporter” and “Editor” packages.</li>
                <li>An “Unapologetically Progressive” T-Shirt.</li>
              </ul>
            </div>

            <p className="text-sm italic">Note: Because we are a for-profit publication, your membership contribution is not tax deductible. Membership appreciation gifts will arrive by mail 3 months after you sign up for your membership.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Support;
