import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile, Tablet } from '../../Responsive'

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    gap: 100px;
    justify-content: center;

    ${Tablet({width: "calc(100% - 150px)",
        paddingBottom: 100})}

    ${Mobile({width: "calc(100% - 50px)"})}
`
const ButtonDiv = styled.div`
`
const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #101010;
    font-weight: 300;
    cursor: pointer;
`
const ProductDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    margin-top: 50px;

    ${Mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
`
const Picture = styled.picture`
`
const Source = styled.source`
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    padding: 0 50px;

    ${Tablet({ padding: "0 10px"})}
    ${Mobile({padding: "0"})}
`
const Overline = styled.p`
    letter-spacing: 8px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 400;
    color: #D87D4A;
`
const Title = styled.h2`
    font-size: 40px;
     font-weight: 800;
     color: #101010;
    letter-spacing: 1.5px;
`
const Desc = styled.p`
    font-size: 15px;
     font-weight: 500;
     color: #101010;
     letter-spacing: 1px;
     line-height: 1.5;
`
const Price = styled.p`
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
    padding: 0 30px;
`
const Amount = styled.span`
`
const MinusPlus = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`
const Add2Cart = styled.button`
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


const ProductInformation = ({Detail}) => {

    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const HandleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }  

    
  return (
    <Section>
        <Container>
            <ButtonDiv>
                <Button onClick={() => navigate(-1)}>Go Back</Button> 
            </ButtonDiv>
                <ProductDetails>
                <Left>
                    <Picture>
                        <Source media='(max-width: 375px)' srcSet={Detail.image.mobile}/>
                        <Source media='(max-width: 768px)' srcSet={Detail.image.tablet}/>
                        <Source media='(min-width: 769px)' srcSet={Detail.image.desktop}/>
                        <Image src={Detail.image.desktop} alt={Detail.name}/>
                    </Picture>
                </Left>
                <Right>
                    <Overline>{Detail.new ? "New Product" : ""}</Overline>
                    <Title>{Detail.name}</Title>
                    <Desc>{Detail.description}</Desc>
                    <Price>$ {Detail.price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <MinusPlus onClick={() => HandleQuantity("dec")}>-</MinusPlus>
                            <Amount>{quantity}</Amount>
                            <MinusPlus onClick={() => HandleQuantity("inc")}>+</MinusPlus>
                        </AmountContainer>
                            <Add2Cart>Add to Cart</Add2Cart>
                    </AddContainer>
                </Right>
            </ProductDetails>
        </Container>
    </Section>
  )
}

export default ProductInformation