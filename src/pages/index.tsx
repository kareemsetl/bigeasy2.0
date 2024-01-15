import Head from "next/head";
import { useUser } from "node_modules/@clerk/nextjs";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";
import Thumbnail from "~/components/Thumbnail"


export default function Home() {

  const user = useUser();

  const { data, isLoading } = api.post.getFeaturedPostThumbnail.useQuery();

  const CreatePostWizard = () => {
    const { user } = useUser();

    if (!user) return null;

    return (<div className="flex w-full gap-3">
      <img src="{user.profileImageUrl}" alt="User Profile Image" className="h-16 w-16 rounded-full"></img>
      <input placeholder="Post your story!" className="bg-transparent w-full grow" />
    </div>);


  }

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No posts!</div>;

  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center h-full mt-20 p-2">
        <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
          maxWidth: '1460px',
          marginTop: '255px',
          padding: '20px'
        }}>
          <div className="flex">
            <div className="w-2/3 float left">

                <h1 className="mb-5 ml-3 text-xl"> Featured Articles: </h1>
                {
                  data.map((thumbnail) => (
                    <Thumbnail key={thumbnail.post_id} thumbnail={thumbnail} />
                  ))
                }
              <b className="w-1/3 ml-10">
              </b>
            </div>
            {/* Second Column for Additional Content */}
            <div className="w-1/3 float-left">
              <h1 className="mb-5 ml-3 text-xl"> Ad Space </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
