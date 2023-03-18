import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile, Tablet } from '../../Responsive'

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin: 70px 0; */
`
const Container = styled.div`
    width: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    margin-bottom: 50px;

    ${Tablet({width: "calc(100% - 150px)"})}

    ${Mobile({width: "calc(100% - 50px)"})}
`
const Title = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
`
const OthersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    ${Mobile({flexDirection: "column",
        gap: 50})}
`
const ProductContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    ${Mobile({gap: 10})}
`
const Picture = styled.picture`
`
const Source = styled.source`
`
const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px;

    ${Mobile({width: "100%"})}
`
const ProductName = styled.h6`
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
`
const Button = styled.button`
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

const OtherProducts = ({Detail}) => {
  return (
    <Section>
        <Container>
            <Title>You may also like</Title>
            <OthersContainer>
                {Detail.others.map((other) => (
                    <ProductContainer key={other.name}>
                        <Picture>
                            <Source media='(max-width: 375px)' srcSet={other.image.mobile}  alt={other.name}/>
                            <Source media='(max-width: 768px)' srcSet={other.image.tablet}  alt={other.name}/>
                            <Source media='(min-width: 769px)' srcSet={other.image.desktop}  alt={other.name}/>
                            <Image src={other.image.desktop} alt={other.name}/>
                        </Picture>
                    <ProductName>{other.name}</ProductName>
                    <Link to={`/productdetail/${other.slug}`}>
                    <Button>See Product</Button>
                    </Link>
                </ProductContainer>
                    ))}
            </OthersContainer>
        </Container>
    </Section>
  )
}

export default OtherProducts