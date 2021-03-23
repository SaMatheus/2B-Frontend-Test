import styled from 'styled-components'

export const Main = styled.section`
  /* Visual */
  background: var(--yellow);

`

export const Carrousel = styled.div`
  /* Box Model */
  display: flex;
  align-items: center;
  height: 80vh;
  width: 100%;
  margin-top: 1rem;
`

export const LeftContent = styled.div`
  /* Box Model */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 50%;

  h1,
  h3,
  p {
    /* Box Model */
    margin-bottom: 1.3rem;
  }

  h1 {
    /* Typographic */
    font-size: 2.1rem;
  }
  h3,
  p {
    /* Visual */
    color: var(--grey);
  }
  h3 {
    /* Typographic */
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.7rem;
    /* Box Model */
    width: 390px;
  }
  p {
    /* Typographic */
    line-height: 1.2rem;

    /* Box Model */
    max-width: 470px; 
  }

  div {
    /* Box Model */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 250px;
    min-width: 200px;
    svg {
      font-size: 50px;
    }
  }
`

export const RightContent = styled.div`
  /* Box Model */
  height: 100%;
  width: 50%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
  }
`

export const Features = styled.section`
  /* Box Model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5rem;
    max-width: 900px;
    color: var(--grey);
  }
`

export const FeatureList = styled.div`
  /* Box Model */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 7rem;
`

export const FeatureObj = styled.div`
  /* Box Model */
  display: flex;
  justify-content: center;
  height: 200px;

  img {
    /* Box Model */
    margin-right: 1.5rem;
    align-self: flex-start;
    height: 30px;
    width: 40px;
  }

  div {
    /* Box Model */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    h2 {
      font-weight: 500;
      margin-bottom: 1rem;
    }
    p {
      color: var(--grey);
      opacity: .7;
    }
  }
`

export const InputContainer = styled.section`
  /* Box Model */
  min-height: 60vh;
  padding: 7rem 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  /* Visual */
  background: var(--black);
  color: var(--white);

  h1 {
    color: var(--yellow);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  div:nth-last-child(2) {
    /* Box Model */
    height: 60px;
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Position */
    position: relative;

    input,
    button {
      height: 100%;
      border-radius: 6px;
      border: 0;
    }

    input {
      width: 78%;
      padding: 0 2rem;
      margin-right: 1rem;
      font-size: 1.2rem;
      &::-webkit-input-placeholder {
        font-size: 1rem;
      }
    }
    button {
      width: 20%;
      text-transform: uppercase;
      font-weight: bold;
      background: var(--yellow);
    }

    span {
      /* Position */
      position: absolute;
      bottom: -50px;
      color: red;
      
      transform: translateY(-50%);
    }
  }

  div:nth-last-child(1){
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 280px;
    max-width: 300px;
  }
`