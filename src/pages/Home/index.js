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
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)

  const emailIsValid = (str) => {
    let pattern = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
    return !!pattern.test(str);
  };

  const handleSubmit = () => {
    const emailValidation = emailIsValid(inputValue);

    if(emailValidation) {
      setError(false)
      alert('Email registered successfully!')
    } else {
      setError(true)
    }
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
        <RightContent>
          <img src="icons/ipad.png" alt=""/>
        </RightContent>
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
        <div>
        <h1>Keep in touch whit us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's.
        </p>
        </div>
        <div>
        <input type="text" placeholder="Enter your email to update" onChange={({target}) => setInputValue(target.value)}/>
        <button type="submit" onClick={handleSubmit}>submit</button>
        {!!error && inputValue !== '' 
        ? <span>This does not look like an email</span> 
        : !!error && inputValue === '' 
        ? <span>Fill in the field</span> 
        : '' }
        </div>
        <div>
          <a href="https://facebook.com" target='_blank'><img src="icons/facebook ico.png" alt="facebook"/></a>
          <a href="https://twitter.com" target='_blank'><img src="icons/twitter ico.png" alt="twitter"/></a>
          <a href="https://googleplus.com" target='_blank'><img src="icons/google + ico.png" alt="google +"/></a>
          <a href="https://pinterest.com" target='_blank'><img src="icons/pinterest ico.png" alt="pinterest"/></a>
        </div>
    </InputContainer>
    <Footer />
  </>
  )
}

export default Home
