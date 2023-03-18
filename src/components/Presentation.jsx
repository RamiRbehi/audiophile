import React from 'react'
import styled from 'styled-components'
import { presentation } from '../data'
import { Mobile, Tablet } from '../Responsive'

const Section = styled.div`
  height: 70vh;
  /* margin-top: 120px; */
  margin: 0;
  display: flex;
  justify-content: center;


  ${Tablet({margin: 0})}

  ${Mobile({margin: "220px 0"})}
`
const Container = styled.div`
  width: calc(100% - 250px);
  display: flex;
  justify-content: space-between;

  ${Tablet({width: "calc(100% - 150px)",
    flexDirection: "column",
    justifyContent: "space-around"
    })}

  ${Mobile({width: "calc(100% - 50px)"})}
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 50%;

  ${Tablet({order: 2,
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    })}

  ${Mobile({paddingTop: 50})}
`
const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #101010;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`
const Desc = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #101010;
  letter-spacing: 1px;
  line-height: 1.5;
`
const Right = styled.div`
`
const Picture = styled.picture`
`
const Source =styled.source`
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

const Presentation = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Bringing you the <span style={{color: "#D87D4A"}}>best</span> audio gear</Title>
          <Desc>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</Desc>
        </Left>
        {presentation.map((item) =>(
          <Right key={item}>
            <Picture alt={item.name}>
            <Source media='(max-width: 375px)' srcSet={item.image.mobile}/>
            <Source media='(max-width: 768px)' srcSet={item.image.tablet}/>
            <Source media='(min-width: 769px)' srcSet={item.image.desktop}/>
            <Image src={item.image.desktop} alt={item.name}/>
            </Picture>
          </Right>
            ))}
      </Container>
    </Section>
  )
}

export default Presentation