import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Mobile, Tablet } from '../Responsive';

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 60px 0;
`
const Container = styled.div`
    width: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;

    ${Mobile({width: "calc(100% - 50px)"})}
`
const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${Tablet({flexDirection: "column",
    gap: 50})}
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

  /* ${Mobile({width: "120%"})} */
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    text-transform: uppercase;
    padding: 0 50px;

    ${Tablet({alignItems: "center",
    textAlign: "center",
    gap: 20})}
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
const Button = styled.button`
  padding: 10px 30px;
  color: #fff;
  background-color: #D87D4A;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover{
    background-color: #FBAF85;
  }

  &:active{
    background-color: #FBAF85;
    }
`

const Products = ({products}) => {

  return ( 
    <Section>
        <Container>
            {products.map((product) =>(
                <ProductContainer key={product.id}>
            <Left>
                <Picture alt={product.name}>
                    <Source media='(max-width: 375px)' srcSet={product.categoryImage.mobile}/>
                    <Source media='(max-width: 768px)' srcSet={product.categoryImage.tablet}/>
                    <Source media='(min-width: 769px)' srcSet={product.categoryImage.desktop}/>
                    <Image src={product.categoryImage.desktop} alt={product.name}/>
                </Picture>
            </Left>
            <Right>
                <Overline>{product.new ? "New Product" : ""}</Overline>
                <Title>{product.name}</Title>
                <Desc>{product.description}</Desc>
                <Link to={`/productdetail/${product.slug}`}>
                  <Button>See Product</Button>
                </Link>
            </Right>
            </ProductContainer>
                    ))}
        </Container>
    </Section>
  )
}

export default Products