import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CheckmarkIcon from '../assets/checkout/icon-order-confirmation.svg'
import testImage from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg" 
import { Mobile, Tablet } from '../Responsive'

const Section =styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
  /* transform: translate(-50%, -70%); */
  z-index: 10;
  background: rgba(0, 0, 0, 0.616);
  width: 100%;
  height: 96%;
  padding-top: 200px;

  ${Tablet({height: "89%"})}
    
`
const Container =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    width: 90vw;
    height: 70vh;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px;

    ${Tablet({width: "80%",
      height: "80vh"})}

    ${Mobile({height: "90vh",
      width: "70%"})}
`
const ThankTitle =styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
`
const Checkmark =styled.img`
  width: 10%;
`
const Title =styled.h4`
  font-size: 28px;
  width: 280px;
`
const ThankQuote =styled.p`
  color: #101010;
  font-family: 15px;
`
const ProductAddedDetails =styled.div`
  display: flex;
  place-items: center;
  height: 20vh;

  ${Mobile({flexDirection: "column"})}
`
const Left =styled.div`
  background-color: #f1f1f1;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`
const ProductsAdded = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
`
const Picture = styled.picture`
`
const Source = styled.source`
`
const ProductImage = styled.img`
    width: 30%;
    object-fit: cover;
    border-radius: 10px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    gap: 10px;
    flex: 2;
`
const ProductName = styled.h6`
    font-size: 12px;
    font-weight: 800;
`
const ProductPrice = styled.p`
    font-size: 12px;
    color: #101010;
`
const ProductQuantity = styled.p`
    flex: 1;
    display: flex;
    justify-content: end;
    font-size: 12px;
    font-weight: 500;
    padding-right: 10px;
`
const Break = styled.hr`
  width: 90%;
  border: solid 1px #10101010;
`
const RestProducts = styled.p`
  padding-top: 10px;
  font-size: 12px;
  color: #101010;
`

const Right =styled.div`
  background-color: #000000;
  height: 100%;
  flex: 1;
  display: flex;
  place-items: center;
  justify-content: center;

  ${Mobile({width: "100%",})}
`

const CalcDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;

  ${Mobile({})}
`
const SubHeader = styled.h5`
    font-weight: 400;
    font-size: 18px;
    color: #fafafa;
`
const Price = styled.p`
    font-size: 15px;
    font-weight: 600;
`
const Button =styled.button`
    padding: 10px 30px;
    color: #fff;
    background-color: #D87D4A;
    border: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    width: 100%;

    &:hover{
    background-color: #FBAF85;
  }

  &:active{
    background-color: #FBAF85;
    }
`

const ThankCard = () => {
  return (
    <Section>
        <Container>
          <ThankTitle>
            <Checkmark src={CheckmarkIcon}/>
            <Title>THANK YOU FOR YOUR ORDER</Title>
            <ThankQuote>You will revieve an email confirmation shortly</ThankQuote>
          </ThankTitle>
          <ProductAddedDetails>
            <Left>
              <ProductsAdded>
                <ProductImage src={testImage}/>
                <Content>
                  <ProductName>Product Name</ProductName>
                  <ProductPrice>$ 2,999</ProductPrice>
                </Content>
                <ProductQuantity>x1</ProductQuantity>
              </ProductsAdded>
              
              <Break/>

              <RestProducts>And 2 other item(s)</RestProducts>
            </Left>
            <Right>
              <CalcDiv paddingTop='space'>
               <SubHeader>GRAND TOTAL</SubHeader>
               <Price>$ 5,446</Price>
              </CalcDiv>
            </Right>
          </ProductAddedDetails>
          <Link to="/easybank/">
            <Button>BACK TO HOME</Button>
          </Link>
        </Container>
    </Section>
  )
}

export default ThankCard