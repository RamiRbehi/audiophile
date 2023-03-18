import React from 'react'
import styled from 'styled-components'
import { zx9 } from '../../data'
import PatternCircle from "../../assets/home/desktop/pattern-circles.svg"
import { Link } from 'react-router-dom'
import { Mobile, Tablet } from '../../Responsive'

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: calc(100% - 250px);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    ${Tablet({width: "calc(100% - 150px)"})}

    ${Mobile({width: "calc(100% - 50px)"})}
`
const ZX9Container = styled.div`
    background-color: #D87D4A;
    /* height: 60vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #ffffff;

    ${Tablet({flexDirection: "column",
        height: "70vh"})}

    ${Mobile({height: "90vh"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    position: relative;

    ${Tablet({paddingTop: 50})}
`
const SpeakerImage = styled.img`
    width: 50%;
    z-index: 1;
    padding-bottom: 15px;

    ${Tablet({width: "30%"})}

    ${Mobile({width: "50%"})}
`
const Pattern = styled.img`
    position: absolute;
    width: 130%;

    ${Tablet({width: "100%"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    z-index: 3;

    ${Tablet({alignItems: "center",
    textAlign: "center", 
    flex: 2,
    gap: "40px",})}
`
const Title = styled.h2`
    font-size: 40px;
    font-weight: 800;
    width: 50%;

    ${Tablet({width: "30%"})}

    ${Mobile({width: "80%"})}
`
const Desc = styled.p`
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 500;
    width: 80%;
`
const Button = styled.button`
    padding: 10px 30px;
    color: #fff;
    background-color: #101010;
    border: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

    &:active{
        background-color: rgba(16, 16, 16, 0.87)
  }
`
const ZX9 = () => {
  return (
    <Section>
        <Container>
            {zx9.map((item) => (
                <ZX9Container key={item}>
                <Left>
                    <SpeakerImage src={item.image.desktop} alt={item.name}/>
                    <Pattern src={PatternCircle}/>
                </Left>
                <Right>
                    <Title>{item.name}</Title>
                    <Desc>{item.desc}</Desc>
                    <Link to={"/productdetail/zx9-speaker"}>
                        <Button>SEE PRODUCT</Button>
                    </Link>
                </Right>
            </ZX9Container>
                ))}
        </Container>
    </Section>
  )
}

export default ZX9