import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Features from '../components/ProductInformation/Features'
import Gallery from '../components/ProductInformation/Gallery'
import OtherProducts from '../components/ProductInformation/OtherProducts'
import ProductInformation from '../components/ProductInformation/ProductInformation'
import productsDetailed from "../data.json";

const Section = styled.div`
    width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`

const ProductDetail = () => {
  const {slug} = useParams();
  const Detail = productsDetailed.find(
    (p) => p.slug === slug);

  return ( 
    <Section>
        <Container>
            <Navbar bgColor="#000000"/>
                <ProductInformation Detail={Detail}/>
                <Features Detail={Detail}/>
                <Gallery Detail={Detail}/>
                <OtherProducts Detail={Detail}/>
            <Categories/>
            <Presentation/>
            <Footer/>
        </Container>
    </Section>
  )
}

export default ProductDetail