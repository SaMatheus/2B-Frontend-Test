import React from 'react'

// STYLES
import { Container, Carrousel, LeftContent, RightContent } from './styles'

// COMPONENTS
import Header from '../../components/Header'

const Home = () => {
  return (
    <Container>
      <Header />
      <Carrousel>
        <LeftContent>
          <h1>Inpire your inpiration</h1>
          <h3>Simple to use for your app, products showcase and your inpiration</h3>
        </LeftContent>
        <RightContent></RightContent>
      </Carrousel>
    </Container>
  )
}

export default Home
