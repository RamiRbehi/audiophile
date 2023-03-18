import React from 'react'
import styled from 'styled-components'
import { Mobile, Tablet } from '../Responsive'
import Categories from './Categories'

const Section = styled.div`
    visibility: hidden;
    display: flex;
    align-items: start;    
    position: absolute;
    top: 10vh;
    right: 0;
    left: 0;
    bottom: 0;
    /* padding: 0 120px; */
    z-index: 10;
    height: 100%;
    background: rgba(0, 0, 0, 0.616);


    ${Tablet({visibility: "visible"})}

    ${Mobile({
      top: "10vh",})}
`

const Container = styled.div`
   background-color: #ffffff;
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   width: 100%;
`


const CategoriesResponsive = () => {
  return (
    <Section>
      <Container>
        <Categories/>
      </Container>
    </Section>
  )
}

export default CategoriesResponsive