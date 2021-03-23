import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <div>
        <p>HALOVIETNAM LTD 66, Dang Van ngu, Dong Da, Hanoi, Vietnam</p>
        <p>contact@halovietnam.com</p>
        <p>+884 35149182</p>
      </div>
      <div>
        <p>Examples</p>
        <p>Shop</p>
        <p>License</p>
      </div>
      <div>
        <p>Contact</p>
        <p>About</p>
        <p>Privacy</p>
        <p>Terms</p>
      </div>
      <div>
        <p>Download</p>
        <p>Support</p>
        <p>Documents</p>
      </div>
      <div>
        <p>Media</p>
        <p>Blog</p>
        <p>Forums</p>
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  /* Box Model */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  padding: 2rem 20rem;

  /* Visual */
  background: var(--black);

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 200px;
    p {
      line-height: 1.3rem;
      color: var(--white);
      margin-bottom: .2rem;
    }
  }
`