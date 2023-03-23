import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { removeAllPrducts, updateProductQuantity } from '../redux/cartRedux'
import { Mobile, Tablet } from '../Responsive'

const Section = styled.div`
    display: flex;
    justify-content: end;
    padding-right: 150px;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 10vh;
    right: 0;
    background: rgba(0, 0, 0, 0.616);
    z-index: 10;

    ${Tablet({paddingRight: 50})}
    ${Mobile({paddingRight: 20})}
`
const Container = styled.div`
    background-color: #ffffff;
    width: 50vmax;
    height: 80vmin;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;

    ${Tablet({width: "80vw"})}
    ${Mobile({width: "75vw"})}
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductNumber = styled.p`
    font-size: 18px;
    font-weight: 600;
`
const RemoveButton = styled.button`
    border: none;
    background-color: transparent;
    text-decoration: underline;
    color: #101010;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        color: #D87D4A;
    }
`
const Center = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 30px;
    flex-wrap: wrap;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
        background: #f1f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #D87D4A; 
        border-radius: 10px;
    }
`
const ProductAdded = styled.div`
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
    gap: 20px;
`
const ProductName = styled.h6`
    font-size: 12px;
    font-weight: 800;
`
const ProductPrice = styled.p`
    font-size: 12px;
    font-weight: 800;
    color: #101010;
`
const AddContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`
const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #f1f1f1;
    padding: 5px 15px;
`
const Amount = styled.span`
    font-size: 12px;
    font-weight: 800;
`
const MinusPlus = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Total = styled.p`
`
const TotalPrice = styled.p`
`
const CheckoutButton = styled.button`
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

const none = {
    textDecoration: 'inherit',
    color: 'inherit', 
}

const CartCard = () => {
    // const [quantity, setQuantity] = useState(1);
    const cart = useSelector(state => state.cart);
    const productsAdded = useSelector(state => state.cart.quantity)
    const dispatch = useDispatch();

    const HandleQuantity = (type, id, quantity) => {
        if (type === "dec") {
            quantity > 1 && dispatch(updateProductQuantity({id, quantity: quantity - 1}));
        } else {
            dispatch(updateProductQuantity({id, quantity: quantity + 1}));
        }
    };

    const handleRemoveAll = () => {
        dispatch(removeAllPrducts());
    };

  return (
    <Section>
        <Container>
            <Top>
                <ProductNumber>CART ({productsAdded})</ProductNumber>
                <RemoveButton onClick={handleRemoveAll}>Remove all</RemoveButton>
            </Top>
                {cart.products.map((product) => (
            <Center key={product.id}>

                    <ProductAdded>
                    <ProductImage src={product.image}/>
                        <Content>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                        </Content>
                    <AddContainer>
                        <AmountContainer key={product.quantity}>
                            <MinusPlus onClick={() => HandleQuantity("dec", product.id, product.quantity)}>-</MinusPlus>
                            <Amount>{product.quantity}</Amount>
                            <MinusPlus onClick={() => HandleQuantity("inc", product.id, product.quantity)}>+</MinusPlus>
                        </AmountContainer>
                    </AddContainer>
                </ProductAdded>
            </Center>
                    ))}
            <Bottom>
                <TotalContainer>
                    <Total>TOTAL</Total>
                    <TotalPrice>$ {cart.total}</TotalPrice>
                </TotalContainer>
                <Link style={none} to="/checkout">
                    <CheckoutButton>CHECKOUT</CheckoutButton>
                </Link>
            </Bottom>
        </Container>
    </Section>
  )
}

export default CartCard