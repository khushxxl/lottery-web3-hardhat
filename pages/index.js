import Head from 'next/head'
import HomeScreen from '../components/HomeScreen'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Let's Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </div>
  )
}
