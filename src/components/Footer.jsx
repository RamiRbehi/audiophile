import React from 'react'
import styled from 'styled-components'
import LogoImage from '../assets/shared/desktop/logo.svg'
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"
import { NavLink } from 'react-router-dom'
import { Mobile, Tablet } from '../Responsive'

const Section = styled.div`
  width: 100%;
  background-color: #101010;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: calc(100% - 250px);
  /* height: 50vh; */
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${Tablet({padding: "60px 0"})}

  ${Mobile({width: "calc(100% - 50px)",
  gap: 40,
  padding: "40px 0"})}
`
const Top = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${Tablet({flexDirection: "column",
    justifyContent: "center",
    alignItems: "start"
  })}

  ${Mobile({alignItems: "center",
    paddingTop: 20})}
`
const Break = styled.hr`
  border: solid 2px #D87D4A;
  width: 15%;
  position: absolute;
  top: -50px;
  left: 0;

  ${Tablet({top: -60})}

  ${Mobile({width: "60%",
    left: 60,
    top: -40})}
`

const Logo = styled.img`
  cursor: pointer;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
  gap: 30px;

  ${Mobile({flexDirection: "column"})}

  ${Mobile({alignItems: "center",
    gap: 20})}
`
const ListItems = styled.li`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1.5px;
  cursor: pointer;
  color: #fafafa;

  &:hover{
        color: #D87D4A;
    }

  &:active{
        color: #D87D4A;
    }
`


const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 40px;
  color: #ffffff;

  ${Mobile({justifyContent: "center"})}
`
const Desc = styled.p`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 2;
  width: 50%;

  ${Tablet({width: "100%"})}

  ${Mobile({textAlign: "center"})}
`


const Bottom = styled.div`
  flex: 1;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Mobile({flexDirection: "column",
    gap: 40,
    paddingBottom: 50})}
`
const Copyright = styled.p`
  font-weight: 500;
  letter-spacing: 0.5px;
`
const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  padding-bottom: 70px;

  ${Tablet({paddingBottom: "0"})}
`
const Icons = styled.img`
  cursor: pointer;

  &:hover{
    color: #D87D4A;
    }
`

const none = {
  textDecoration: 'inherit',
  color: 'inherit' 
}

const Footer = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Break/>
          <Logo src={LogoImage}/>
          <List>
            <NavLink style={none} to={"/audiophile/"}><ListItems>HOME</ListItems></NavLink>
            <NavLink style={none} to={`/productcategory/headphones`}><ListItems>HEADPHONES</ListItems></NavLink>
            <NavLink style={none} to={`/productcategory/speakers`}><ListItems>SPEAKERS</ListItems></NavLink>
            <NavLink style={none} to={`/productcategory/earphones`}><ListItems>EARPHONES</ListItems></NavLink>
          </List>
        </Top>
        <Center>
          <Desc>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</Desc>
        </Center>
        <Bottom>
          <Copyright>Copyright 2021. All Rights Reserved</Copyright>
          <IconContainer>
            <Icons src={Facebook}/>
            <Icons src={Twitter}/>
            <Icons src={Instagram}/>
          </IconContainer>
        </Bottom>
      </Container>
    </Section>
  )
}

export default Footer