import { SignIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { useUser } from "node_modules/@clerk/nextjs";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";


export default function Home() {

  const user = useUser();

  const { data, isLoading } = api.post.getFeaturedPostContents.useQuery();

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
      <main className="flex justify-center h-full mt-20">
        <div className="bg-slate-200 w-full h-full border-slate-400 border-x" style={{
          maxWidth: '1460px',
          marginTop: '275px' 
        }}>
          <div className="flex justify-right border-b border-slate-400 p-4">
            <div className="flex p-4 w-full">
              <h2>Featured Articles</h2>
            </div>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          </div>
          <div className="flex flex-col">
            {data?.map((post) => (<div key={post.id} className="p-8 border-b border-slate-400">{post.postContent}</div>))}
          </div>
        </div>
      </main>
    </>
  );
}
