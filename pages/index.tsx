import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>notes</title>
        <meta
          name="description"
          content="Small app to keep my development notes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>notes</main>
    </div>
  )
}

export default Home
