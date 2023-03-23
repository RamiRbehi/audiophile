import React, { useState } from 'react'
import styled from 'styled-components'
import LogoImage from '/assets/shared/desktop/logo.svg'
import CartIcon from '/assets/shared/desktop/icon-cart.svg'
import { Link, NavLink } from 'react-router-dom'
import CartCard from './CartCard'
import { Mobile, Tablet } from '../Responsive'
import Hamburger from "/assets/shared/tablet/icon-hamburger.svg"
import CategoriesResponsive from './CategoriesResponsive'

const Section = styled.div` 
    width: 100%;
    display: flex;
    justify-content: center; 
`
const Container = styled.div`
    width: calc(100% - 250px);
    height: 10vh;
    /* background-color: #101010; */
    background-color: ${(props) => props.bgColor};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 130px;
    border-bottom: solid 1px #fff;

    ${Tablet({width: "calc(100% - 150px)",
        padding: "0 80px"})}

    ${Mobile({width: "calc(100% - 50px)",
        padding: "0 20px"})}
`
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    ${Mobile({gap: "70px"})}
`
const ToggleButton = styled.div`
    display: none;
    cursor: pointer;
    background: url(${Hamburger});
    width: 20px;
    height: 20px;

    ${Tablet({display: "block",})}
` 
const Logo = styled.img`
    cursor: pointer;
`
const Center = styled.div`
    ${Tablet({display: "none"})}
`
const List = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
`
const ListItems = styled.li`
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.5px;
    cursor: pointer;

    &:active{
        color: #D87D4A;
    }
`
const Right = styled.div`
`
const Cart = styled.img`
    cursor: pointer;
`

const none = {
    textDecoration: 'inherit',
    color: 'inherit' 
}


const Navbar = (props) => {

    const [clicked, setClicked] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const [toggleClicked, setToggleClicked] = useState(false);
    const [categoriesVisible, setCategoriesVisible] = useState(false); 

    
    const handleClick = () => {
    //    setClicked(true);
       setCartVisible(prev => !prev);
       setClicked(false)
    };
    const handleToggleClick = () => {
        setToggleClicked(prev => !prev);
        setCategoriesVisible(prev => !prev);
        setToggleClicked(false)
    }


  return (
    <Section>
        <Container bgColor={props.bgColor}>
            <Left>

                {!toggleClicked &&
                <ToggleButton onClick={handleToggleClick}></ToggleButton>
                }


                <Link to={"/audiophile/"}>
                    <Logo src={LogoImage}/>
                </Link>
            </Left>
            <Center>
                <List>
                    <NavLink style={none} to={"/audiophile/"}><ListItems>HOME</ListItems></NavLink>
                    <NavLink style={none} to={`/productcategory/headphones`}><ListItems>HEADPHONES</ListItems></NavLink>
                    <NavLink style={none} to={`/productcategory/speakers`}><ListItems>SPEAKERS</ListItems></NavLink>
                    <NavLink style={none} to={`/productcategory/earphones`}><ListItems>EARPHONES</ListItems></NavLink>
                </List>
            </Center>
            <Right>
                {!clicked &&
                    <Cart onClick={handleClick} src={CartIcon} alt='cartLogo'/>
                }
            </Right>
        </Container>
        {cartVisible && (
                <CartCard/>
        )}
        {categoriesVisible && (
            <CategoriesResponsive/>
        )}
    </Section>
  )
}

export default Navbar