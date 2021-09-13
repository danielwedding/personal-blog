import Head from 'next/head'
import PostIndex from "@components/PostIndex";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Blog</title>
        <meta name="description" content="Daniel's Personal Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostIndex />
    </div>
  )
}
