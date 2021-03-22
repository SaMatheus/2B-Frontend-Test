import React from 'react'
import styled from 'styled-components'

// ICONS
import { IoIosFingerPrint } from "react-icons/io";

const Header = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <IoIosFingerPrint />
          <h1>tinyone</h1>
        </a>
      </div>
      <div>
        <a href="">Features</a>
        <a href="">Support</a>
        <a href="">Blog</a>
      </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  /* Box Model */
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    /* Box Model */
    width: 50%;
    display: flex;
    align-items: center;

    svg {
      /* Box Model */
      height: 60px;
      width: 60px;
      margin-right: 5px;
    }
    h1 {
      /* Typographic */
      font-size: 1.8rem;
    }
    a {
      /* Typographic */
      font-weight: bold;
    }
    a:nth-child(1) {
      /* Box Model */
      display: flex;
      align-items: center;
    }
  }

  div:nth-child(2) {
    /* Box Model */
    justify-content: space-between;
    max-width: 500px;
  }
`