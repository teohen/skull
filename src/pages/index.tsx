import React from 'react'

import Head from 'next/head'

import GPS from '../assets/gps.svg'

import { Container } from '../styles/pages/Home'
import Card from '../components/card/card.component'
import HideButton from '../components/HideButton/HideButton.component'
import Action from '../components/action/Action.component'
import Board from '../components/board/board.component'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Skull</title>
      </Head>
      <main>
        <Board
          id="board_1"
          className="board_1">
          <Card
            id="1"
            className="card_1"
          >
            <p>Card</p>
          </Card>
        </Board>
        <Board
          id="board_2"
          className="board_2"
        >
          <Card
            id="card_2"
            className="card_2"
          >
            <p>card 2</p>
          </Card>

        </Board>
      </main>
    </Container>
  )
}

export default Home
