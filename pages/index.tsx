// import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import RearCogs from '../src/components/rearCogs';
import FrontCogs from '../src/components/frontCog';
import Details from '../src/components/details';
import { useCounterRear } from '@src/context/RearCogContext'
import { useCounterFront } from '@src/context/FrontCogContext'

const Home: Head = () => {
  const { rearstate, reardispatch } = useCounterRear()
  const { frontstate, frontdispatch } = useCounterFront()
  return (
    <div className={styles.container}>
      <Head>
        <title>Cog Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
      <RearCogs handler={reardispatch} {...rearstate} />
      <FrontCogs handler={frontdispatch} {...frontstate} />
      <Details {...frontstate} />

    </div>
  )
}

export default Home
