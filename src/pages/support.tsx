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
        <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
          maxWidth: '1460px',
          marginTop: '275px'
        }}>
          <script src="https://www.googleoptimize.com/optimize.js?id=GTM-PFMMFMR"></script>
          Big Easy Magazine is a publication for the people of New Orleans. Our writers are locals who live New Orleans every day, and our advertisers are local businesses—their support allows us to be free of corporate influence.

          <b>If you value Big Easy Magazine and the unique look we take at local government, the environment, race, gender, and class, we encourage ask you to become a member. Maybe you look forward to our original poetry and film reviews—a membership is for you. Do you bleed black and gold and value our Saints coverage each week? And do you consult the Progressive’s Weekend and Progressive Living? We’d love to have you as a member.</b>

          <span className="text-sm p-2">Our memberships are designed to be affordable for all New Orleanians with varying levels of membership. We’ll charge your credit or debit card monthly to make it as easy as possible for you. We’ll also show our appreciation by thanking you publicly, and we’re pleased to offer the membership benefits below. </span><b>All Big Easy members allow the progressive stories to be told, and help make our community more inclusive and welcoming for all. </b>
          <h2><b>Reporter’s Circle: $3.00/month</b></h2>
          <span className="text-sm p-2">Benefits include:</span>
          <ul>
            <li className="text-sm p-2"><span className="text-sm p-2">An “Unapologetically Progressive” sticker for your laptop, water bottle, or car.</span></li>
            <li className="text-sm p-2"><span className="text-sm p-2">A “members only” email each month that features exclusive content.</span></li>
            <li className="text-sm p-2"><span className="text-sm p-2">A special sneak preview of our monthly edition.</span></li>
            <li className="text-sm p-2"><span className="text-sm p-2">Advance notification of events, advertisement opportunity, and other ways to connect with Big Easy Magazine.</span></li>
          </ul>
          <h2><b>
            Editor’s Circle: $5.00/month</b></h2>
          <span className="text-sm p-2">Benefits include:</span>
          <ul>
            <li className="text-sm p-2"><span className="text-sm p-2">Everything included in the “Reporter” package.</span></li>
            <li className="text-sm p-2"><span className="text-sm p-2">An “Unapologetically Progressive” coffee mug.</span></li>
          </ul>
          <h2><b>
            Publisher’s Circle: $10.00/month</b></h2>
          <span className="text-sm p-2">Benefits include:</span>
          <ul>
            <li className="text-sm p-2"><span className="text-sm p-2">Everything included in the “Reporter” and “Editor” packages.</span></li>
            <li className="text-sm p-2"><span className="text-sm p-2">An “Unapologetically Progressive” T-Shirt.</span></li>
          </ul>
          &nbsp;

          <i><span className="text-sm p-2">Because we are a for-profit publication, your membership contribution is not tax deductible. </span></i>

          <i><span className="text-sm p-2">Membership appreciation gifts will arrive by mail 3 months after you sign up for your membership. </span></i>

        </div>
      </main>
    </>
  );
};

export default Support;
