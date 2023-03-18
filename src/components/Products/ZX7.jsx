import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { zx7 } from '../../data'
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
    position: relative;

    ${Tablet({width: "calc(100% - 150px)"})}

    ${Mobile({width: "calc(100% - 50px)"})}
`
const ZX7Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10x;

    /* ${Mobile({height: "40vh"})} */
`
const Picture = styled.picture`
`
const Source = styled.source`
`
const SpeakerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const Left = styled.div`
    position: absolute;
    left: 150px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    ${Tablet({left: 50})}

    ${Mobile({left: 10})}
`
const Title = styled.h4`
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 1.5px;
`
const Button = styled.button`
    padding: 10px 30px;
    color: #101010;
    background-color: transparent;
    border: solid 1px #101010;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: #101010;
        color: #ffffff;
    }

    &:active{
        background-color: #101010;
        color: #ffffff;
    }
`

const ZX7 = () => {
  return (
    <Section>
        <Container>
            {zx7.map((item) => (
                <ZX7Container key={item}>
                <Left>
                    <Title>{item.name}</Title>
                    <Link to={"/productdetail/zx7-speaker"}>
                        <Button>SEE PRODUCT</Button>
                    </Link>
                </Left>
                <Picture alt={item.name}>
                    <Source media='(max-width: 375px)' srcSet={item.image.mobile}/>
                    <Source media='(max-width: 768px)' srcSet={item.image.tablet}/>
                    <Source media='(min-width: 769px)' srcSet={item.image.desktop}/>
                    <SpeakerImage src={item.image.desktop} alt={item.name}/>
                </Picture>
            </ZX7Container>
            ))}
        </Container>
    </Section>
  )
}

export default ZX7