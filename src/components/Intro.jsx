import React from 'react'
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Hero from "../assets/home/desktop/image-hero.jpg"
import HeroTablet from "../assets/home/tablet/image-header.jpg"
import HeroMobile from "../assets/home/mobile/image-header.jpg"
import { Link } from 'react-router-dom';
import { Mobile, Tablet } from '../Responsive';

const Section = styled.div`
  background: url(${Hero});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  ${Tablet({background: `url(${HeroTablet})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
      })}

  ${Mobile({background: `url(${HeroMobile})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",})}
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  place-content: center;
  place-items: start;
  height: 90vmin;
  padding-left: 130px;
  gap: 20px;
  width: calc(100% - 800px);
  /* width: 100%; */
  color: #fff;

  ${Tablet({textAlign: "center", 
  alignItems: "center",
  placeContent: "center",
  justifyContent: "start",
  // margin: "0 150px",
  paddingLeft: 0,
  paddingTop: 100,
  width: "calc(100%)",
  // height: "70vh"
  })}

${Mobile({paddingTop: 50,
  height: "100vmin"
})}
`
const Overline = styled.p`
  letter-spacing: 7px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 200;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 56px;
  font-weight: 800;

  ${Tablet({width: "50vw"})}

  ${Mobile({fontSize: "38px",
    width: "80vw"
  })}
`
const Desc = styled.p`
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  width: calc(100% - 150px);

  ${Tablet({width: "60vw"})}

  ${Mobile({width: "80vw"})}
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

const Intro = ({Detail}) => {
  return (
    <Section>
      <Navbar/>
      <Container>
          <Overline>New product</Overline>
          <Title>XX99 Mark II Headphones</Title>
          <Desc>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Desc>
          <Link to={"/productdetail/xx99-mark-one-headphones"}>
          <Button>See product</Button>
          </Link>
      </Container>
    </Section>
  )
}

export default Intro