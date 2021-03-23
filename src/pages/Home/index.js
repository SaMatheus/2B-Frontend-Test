import React, {useState} from 'react'

// STYLES
import { 
  Main, 
  Carrousel, 
  LeftContent, 
  RightContent, 
  Features, 
  FeatureList, 
  FeatureObj,
  InputContainer } from './styles'

// ICONS
import { AiFillApple, AiFillAndroid, AiFillWindows } from 'react-icons/ai'

// DATA
import FeaturesData from '../../data/features'

// COMPONENTS
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home = () => {
  const [inputvalue, setInputValue] = useState()

  const handleSubmit = () => {
    if ()
  }

  return (
    <>
    <Main>
      <Header />
      <Carrousel>
        <LeftContent>
          <h1>Inpire your inpiration</h1>
          <h3>Simple to use for your app, products showcase and your inpiration</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took ince the 1500s, when an unknown.
          </p>
          <div>
            <AiFillApple />
            <AiFillAndroid />
            <AiFillWindows />
          </div>
        </LeftContent>
        <RightContent></RightContent>
      </Carrousel>
    </Main>
    <Features>
      <h1>Tinyone features</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard but also.
      </p>
      <FeatureList>
        {FeaturesData.map(obj => {
          return (
            <FeatureObj>
              <img src={obj.icon} alt={obj.title}/>
              <div>
                <h2>{obj.title}</h2>
                <p>{obj.description}</p>
              </div>
            </FeatureObj>
          );
        })}
      </FeatureList>
    </Features>
    <InputContainer>
        <h1>Keep in touch whit us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took.
        </p>
        <div>
        <input type="text" placeholder="Enter your email to update" onChange={({target}) => setInputValue(target.value)}/>
        <button type="submit" onClick={handleSubmit}>submit</button>
        </div>
        
    </InputContainer>
    <Footer />
  </>
  )
}

export default Home
