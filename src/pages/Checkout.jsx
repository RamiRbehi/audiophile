import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CheckoutForm from '../components/CheckoutSides/CheckoutForm'
import Summary from '../components/CheckoutSides/Summary'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Mobile, Tablet } from '../Responsive'

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Container = styled.div`
  width: calc(100% - 250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  margin: 50px 0;

  ${Tablet({width: "calc(100% - 150px)"})}

  ${Mobile({width: "calc(100% - 50px)"})}
`
const ButtonDiv = styled.div`
`
const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #101010;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 1px;

    &:hover{
      color: #D87D4A;
    }
`
const FormDiv = styled.div`
  display: flex;
  gap: 30px;

  ${Tablet({flexDirection: "column"})}
`

const Checkout = ({cartVisible}) => {

  const navigate = useNavigate();

  return (
    <Section>
      <Navbar bgColor="#000000"/>
      <Container>
        <ButtonDiv>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </ButtonDiv>
        <FormDiv>
            <CheckoutForm/>
            <Summary/>        
        </FormDiv>
      </Container>
        <Footer/>
    </Section>
  )
}

export default Checkout