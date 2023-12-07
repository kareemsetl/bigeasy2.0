import { SignIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { useUser } from "node_modules/@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {

  const user = useUser();
  const { data } = api.post.getLatest.useQuery();

  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>{!user.isSignedIn && <SignInButton />}{!!user.isSignedIn && <SignOutButton />}</div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        <div>
          {data?.map((post) => (<div key={post.id}>{post.postContent}</div>))}
        </div>
      </main>
    </>
  );
}
