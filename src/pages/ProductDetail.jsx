import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Features from '../components/ProductInformation/Features'
import Gallery from '../components/ProductInformation/Gallery'
import OtherProducts from '../components/ProductInformation/OtherProducts'
import ProductInformation from '../components/ProductInformation/ProductInformation'
import { ProductsContext } from '../ProductProvider'
// import productsDetailed from "../data.json";

const Section = styled.div`
    width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`

// const {slug} = useParams();

// const gettingProducts = useContext(ProductsContext);
// const Detail = gettingProducts.find(
//   (p) => p.slug === slug); 
const ProductDetail = () => {

  // const gettingProducts = useContext(ProductsContext);
  // const {productSlug} = useParams();

  // if (!gettingProducts || gettingProducts.length === 0) {
  //   return <p>No products found...</p>
  // }

  // const productInfo = gettingProducts.find(
  //   item => item.slug === productSlug
  // );

  // if  (!productInfo) {
  //   return <p>Product not found...</p>
  // }

  // console.log(gettingProducts);
  // console.log("productSlug", productSlug);
  // console.log("productInfo", productInfo);

  // const {state: {productInfo}} = useLocation();



  return ( 
    <Section> 
        <Container>
            <Navbar bgColor="#000000"/>
                <ProductInformation/>
                <Features/>
                <Gallery/>
                <OtherProducts/>
            <Categories/>
            <Presentation/>
            <Footer/>
        </Container>
    </Section>
  )
}

export default ProductDetail