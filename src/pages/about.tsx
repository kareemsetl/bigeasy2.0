import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center h-full mt-20">
        <div className="bg-slate-200 w-full h-full border-slate-400 border-x p-5" style={{
          maxWidth: '1460px',
          marginTop: '255px'
        }}>
          <div className="container mx-auto px-4 py-4">
            <h3 className="text-2xl font-bold text-center mb-4">A UNIQUE PERSPECTIVE</h3>
            <div className="text-justify mb-8">
              Big Easy Magazine is the online home for progressive New Orleans. Our publication features original content published both weekly and monthly. The issues we cover are not always unique, but our coverage is unique in the way we approach them. We examine the issues we cover—from race to politics and from LGBTQ issues to the environment, through the eyes of the people of New Orleans.
            </div>
          <h3 className="text-2xl font-bold text-center mb-4">UNAPOLOGETICALLY PROGRESSIVE</h3>
          <div className="text-justify mb-8">
            From the beginning, we have proudly stated that we are a progressive publication. We see the world through a progressive lens, and we believe in such values as love and inclusiveness. We only state facts, and we will never mislead our readers. But at Big Easy Magazine, we are unapologetically progressive.
          </div>

          <h3 className="text-2xl font-bold text-center mb-4">MISSION STATEMENT</h3>
          <div className="text-justify mb-8">
            For a city under threat from water, for a city that stays up all night, in a world in need of different perspectives. With insight and introspection, we strive to deliver thorough and thoughtful coverage with a progressive voice about the issues that truly matter to the New Orleans community.
          </div>

          <h3 className="text-2xl font-bold text-center mb-4">CORE VALUES</h3>
          <div className="text-justify mb-8">
            Big Easy Magazine is guided daily by the following core values:
            <div className="italic mt-2">
            <br/>
              Kindness<br/>
              Compassion<br/> 
              Equality<br/> 
              Love<br/> 
              Justice<br/> 
              Inclusiveness<br/>
              </div>
          </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-6">OUR TEAM</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2018/06/SCOTT-THE-CHIEF-EXECUTIVE-OF-BIGEASY-MAGAZINE-1-1024x683.jpg" alt="Scott Ploof" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Scott-Ploof" className="text-blue-500 hover:text-blue-700">Scott Ploof - Publisher</a></strong></p>
                <p><em>Scott Ploof is a former political candidate, writer, and advocate. He holds an MBA from Southeastern Louisiana University. In 2018, he launched Big Easy Magazine in an effort to give people a platform to use their voices to create meaningful change in their respective communities throughout the Greater New Orleans area.</em></p>
              </div>
            </div>
            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2020/12/evangelinebarberploofpic.jpg" alt="Evangeline Barber Ploof" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Evangeline-Barber-Ploof/" className="text-blue-500 hover:text-blue-700">Evangeline Barber Ploof - Chief Operations Officer</a></strong></p>
                <p><em>Evangeline Barber Ploof has a B.A. in Elementary Education. For seven years, she taught special education for children in elementary school. In 2019, she began work as Chief Operations Officer for Big Easy Magazine. She is married to Big Easy Magazine Founder and Publisher Scott Ploof. She is a native New Orleanian. When she is not working, she enjoys cooking and caring for her three dogs.</em></p>
              </div>
            </div>
            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2018/07/Nolan-8-2009.jpg" alt="Nolan Storey" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Nolan-Storey/" className="text-blue-500 hover:text-blue-700">Nolan Storey - Founding Editorial Board Member / Staff Writer</a></strong></p>
                <p><em>Nolan Storey has lived in New Orleans for 10 years. He fell in love with this city as he received his bachelors in English at Loyola University New Orleans in 2012.  Since then, he has gone on to publish four books, including three books of poetry (some of which is on this site)!  He is currently finishing up his Master's Degree in Clinical Mental Health Counseling.</em></p>
              </div>
            </div>


            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2020/12/IMG_3563-1024x1024.jpg" alt="Michael Raso" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Michael-Raso/" className="text-blue-500 hover:text-blue-700">Michael Raso - Contributing Writer</a></strong></p>
                <p><em><em>Born a Midwesterner but raised in a small town in Central Louisiana, Michael Raso earned a Bachelor’s in communication from went on to go to school at UL at Lafayette. He currently covers breaking news, politics and creates satire for Big Easy Magazine. He’s currently shopping his latest book, tentatively titled “The Black House” For more information, go to <a href="http://michaeldraso.com/">michaeldraso.com</a>.</em></em></p>
              </div>
            </div>

            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2020/12/image1-1-1-1024x1024.png" alt="Candice Battiste" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Candice-Battiste/" className="text-blue-500 hover:text-blue-700">Candice Battiste - Contributing Writer</a></strong></p>
                <p><em><em>BaBattiste's roots extend from Shreveport to New Orleans. She is currently the North Louisiana organizer for Power Coalition for Equity and Justice. She is an alum of Louisiana State University and earned her juris doctorate from Southern University Law Center. Candice serves on a number of statewide and local boards centered civil rights, economic empowerment, and racial equity. When Candice is not working to affect positive change, she is traveling or can be found at one of Louisiana’s many food and music festivals.</em></em></p>
              </div>
            </div>

            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2020/12/Raegan-Carter-1024x1024.jpg" alt="Raegan A Carter" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong>Raegan A Carter - Contributing Writer</strong></p>
                <p><em>Raegan A Carter is a Public Health Policy Consultant, Adjunct Professor at Southern University-BR and a Politico. Raegan works on social justice, reproductive justice, health access and equity and racial justice policy issues and issues that directly or indirectly intersect. Raegan is highly experienced, passionate and dedicated to impact policy change that improves the lives of women, children and families, particularly Black women and communities of color, and all who are disproportionately impacted.</em></p>
              </div>
            </div>


            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2020/12/IMG_20201024_142923_722-1024x1024.jpg" alt="Asad El Malik" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Asad-El-Malik/" className="text-blue-500 hover:text-blue-700">Asad El Malik- Contributing Writer</a></strong></p>
                <p><em>Asad El Malik is an ethnographer, author, and researcher. He is currently a PhD candidate in Intercultural Relations. His research centers on the use of religious/cultural practices in mental health treatment. Asad is a New Orleans native and a proud husband and father.</em></p>
              </div>
            </div>


            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2020/12/casting-3.jpg" alt="Helen Lewis" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Helen-Lewis/" className="text-blue-500 hover:text-blue-700">Helen Lewis- Contributing Writer</a></strong></p>
                <p><em>Helen Lewis is a writer who graduated from Tulane University with a BA in English and a minor in Management. She works as a natural health and lifestyle content writer and editor, along with reporting on local New Orleans news for Big Easy Magazine. Her focus in reporting is social justice issues, health topics, and New Orleans culture.</em></p>
              </div>
            </div>


            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2020/12/Giselle-1024x1024.png" alt="Giselle Dussel" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Giselle-Dussel/" className="text-blue-500 hover:text-blue-700">Giselle Dussel- Contributing writer</a></strong></p>
                <p><em><i>Giselle P. Dussel is a Latina writer with a degree in International Business. She is a contributing writer for Big Easy Magazine, a climate activist and a stay-at-home mother.</i></em></p>
              </div>
            </div>


            <div className="team-member grid grid-cols-2 gap-4 items-center">
              <img src="https://www.bigeasymagazine.com/wp-content/uploads/2021/10/Richard_Windmann.jpeg" alt="Richard G. Windmann" className="max-w-[300px] max-h-[300px] rounded border shadow-lg" />
              <div>
                <p><strong><a href="/author/Richard-Windmann" className="text-blue-500 hover:text-blue-700">Richard G. Windmann - Contributing writer</a></strong></p>
                <p><em><i>Richard G. Windmann is a native son of New Orleans, and describes himself as "Proud Baratarian and a Helluva Nice Guy." He is a Computer Scientist, and works for IBM. He is also the co-founder and President of <a href="http://www.scsaorg.org" target="_blank" rel="noopener noreferrer">Survivors of Childhood Sex Abuse (SCSA)</a>, a 501(c)(3) advocacy organization that provides free support to victims and survivors of childhood sex abuse and their families. He is a devout Catholic who is hell-bent on saving his church. He is also a loving husband, father and grandfather.</i></em></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
