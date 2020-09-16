import React from 'react'

import Head from 'next/head'

import GPS from '../assets/gps.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Skull</title>
      </Head>
      <main>
        <h1>Skull</h1>
        <GPS heigth={50} width={50}/>
      </main>
    </Container>
  )
}

export default Home
