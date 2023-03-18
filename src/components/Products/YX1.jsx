import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { yx1 } from '../../data'
import { Mobile, Tablet } from '../../Responsive'

const  Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const  Container = styled.div`
    width: calc(100% - 250px);
    display: flex;
    justify-content: space-between;
    gap: 50px;

    ${Tablet({width: "calc(100% - 150px)"})}

    ${Mobile({width: "calc(100% - 50px)",
        flexDirection: "column",})}
`
const  Left = styled.div`
    width: 500px;

    ${Mobile({width: 300})}
`
const Picture = styled.picture`
`
const Source = styled.source`
`
const  Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const  Right = styled.div`
    background-color: #f1f1f1;
    width: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    ${Mobile({width: 300,
        height: 200,
        alignItems: "center",})}
`
const Title = styled.h4`
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 1.5px;
    padding-left: 50px;

    ${Mobile({paddingLeft: 0})}
`
const Button = styled.button`
    padding: 10px 30px;
    color: #101010;
    background-color: transparent;
    border: solid 1px #101010;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 50px;

    &:hover{
        background-color: #101010;
        color: #ffffff;
    }

    &:active{
        background-color: #101010;
        color: #ffffff;
    }

    ${Mobile({marginLeft: 0})}
`

const YX1 = () => {
  return (
    <Section>
        {yx1.map((item) => (
            <Container key={item}>
            <Left>
                <Picture alt={item.name}>
                <Source media='(max-width: 375px)' srcSet={item.image.mobile}/>
                <Source media='(max-width: 768px)' srcSet={item.image.tablet}/>
                <Source media='(min-width: 769px)' srcSet={item.image.desktop}/>
                <Image src={item.image.desktop} alt={item.name}/>
                </Picture>
            </Left>
            <Right>
                <Title>{item.name}</Title>
                <Link to={"/productdetail/yx1-earphones"}>
                    <Button>SEE PRODUCT</Button>
                </Link>
            </Right>
        </Container>
            ))}
    </Section>
  )
}

export default YX1