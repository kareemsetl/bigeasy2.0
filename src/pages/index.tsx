import { SignIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { useUser } from "node_modules/@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {

  const user = useUser();

  const { data, isLoading } = api.post.getAllPostContents.useQuery();

  const CreatePostWizard = () =>{
    const {user} = useUser();

    if (!user) return null;

    return <div className="flex justify-right">
      <img src="{user.profileImageUrl}" alt="User Profile Image" className="h-16 w-16 rounded-full"></img>
    </div>

  }

  if(isLoading) return <div>Loading...</div>;

  if(!data ) return <div>No posts!</div>;

  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center h-full">
        <div className="bg-green-900 w-full h-full border-slate-400 md:max-w-6xl border-x justify-right">
          <div className="flex justify-right border-b border-slate-400 p-4">
            <div className="flex justify-right">{!user.isSignedIn &&
              <div className="flex justify-center">
                <SignInButton /></div>}
              {user.isSignedIn &&
                <div className="">
                <CreatePostWizard />
                <SignOutButton />
                </div>
              }</div>
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
