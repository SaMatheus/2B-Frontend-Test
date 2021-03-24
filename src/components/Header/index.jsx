import React from 'react'
import styled from 'styled-components'

// ICONS
import { IoIosFingerPrint } from 'react-icons/io'

const Header = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <IoIosFingerPrint />
          <h1>tinyone</h1>
        </a>
      </div>
      <div class="menuBar">
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

  .menuBar {
    /* Box Model */
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;

    a {
      font-size: 1.2rem;
    }

    svg {
      /* Box Model */
      width: 1.5rem;
      margin: 0;
      display: none;

      /* Position */
      position: absolute;
      top: .8rem;
      right: 1rem;

      /* Visual */
      color: var(--white);
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;

    .menuBar {
      margin-top: 2rem;
      width: 100%;
    }
  }
`