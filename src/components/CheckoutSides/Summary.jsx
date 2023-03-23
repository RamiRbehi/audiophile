import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Mobile, Tablet } from '../../Responsive'
import ThankCard from '../ThankCard'


const SummaryDiv = styled.div`
  background-color: #ffffff;
  width: 350px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;

  ${Tablet({width: 580})}

  ${Mobile({width: 290})}
`
const TitleSummary = styled.h3`
  font-size: 32px;
`

const ProductsAdded = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Picture = styled.picture`
`
const Source = styled.source`
`
const ProductImage = styled.img`
    width: 20%;
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
    font-weight: 200;
`
const CalcPrices = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const CalcDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${props => props.paddingTop === "space" && "20px"};
`
const SubHeader = styled.h5`
    font-weight: 300;
`
const Price = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: ${props => props.color === "orange" && "#D87D4A"};
`
const ContinueAndPay = styled.button`
    padding: 10px 30px;
    color: #fff;
    background-color: #D87D4A;
    border: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
    background-color: #FBAF85;
  }

  &:active{
    background-color: #FBAF85;
    }
`
const CartContainer = styled.div`
    position: relative;
`
// const CloseButton = styled.button`
//     border: none;
//     background: transparent;
//     color: #101010;
//     font-size: 26px;
//     font-weight: 300;
//     cursor: pointer;
//     position: absolute;
//     top: 80px;
//     left: -130px;
// `

const Summary = () => {

  const [clicked, setClicked] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const cart = useSelector(state => state.cart);

  const handleClick = () => {
      //  setClicked(true);
       setCartVisible(true);
    };

  return (
    <SummaryDiv>
          <TitleSummary>Summary</TitleSummary>
          {cartVisible && (
                      <ThankCard/>
              )}


        {cart.products.map((product) => (
          
          <ProductsAdded key={product.id}>
            {/* <Picture> */}
              {/* <Source/>
              <Source/> */}
              <ProductImage src={product.image}/>
            {/* </Picture> */}

            <Content>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>$ {product.price}</ProductPrice>
            </Content>

            <ProductQuantity>x{product.quantity}</ProductQuantity>
          </ProductsAdded>
              ))}



          <CalcPrices>
            <CalcDiv>
              <SubHeader>TOTAL</SubHeader>
              <Price>$ {cart.total}</Price>
            </CalcDiv>
            <CalcDiv>
              <SubHeader>SHIPPING</SubHeader>
              <Price>$ {cart.shipping}</Price>
            </CalcDiv>
            <CalcDiv>
              <SubHeader>VAT (INCLUDED)</SubHeader>
              <Price>$ {(cart.total && (cart.total * 0.2).toFixed(2)) || 0}</Price>
            </CalcDiv>

            <CalcDiv paddingTop='space'>
              <SubHeader>GRAND TOTAL</SubHeader>
              <Price color='orange'>$ {(cart.total && (cart.total + cart.total * 0.2 + cart.shipping).toFixed(2)) || 0}</Price>
            </CalcDiv>
          </CalcPrices>
              
              {!clicked && 
                <ContinueAndPay cartVisible={cartVisible} onClick={handleClick}>Continue & Pay</ContinueAndPay>
              }

              
        </SummaryDiv>
  )
}

export default Summary