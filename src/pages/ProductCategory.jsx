import styled from 'styled-components'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Products from './Products'
import { useParams } from 'react-router-dom'
import products from "../data.json";
import { Mobile, Tablet } from '../Responsive'

const Section = styled.div`
  width: 100%;
  `
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 70px;
`
const IntroContainer = styled.div`
  background-color: #101010;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Tablet({height: "30vh",})}

  ${Mobile({height: "40vh"})}
`
const Title = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
  padding-top: 60px;

  ${Tablet({fontSize: 28,})}
`

const ProductCategory = () => {

  const {slug} =useParams();
  const category = slug.replace("-", " ");
  const categoryProducts = products.filter(
    (product) => product.category === category
);

  
  return (
    <Section>
      <Container>
          <IntroContainer>
              <Navbar/>
              <Title>{category}</Title>
          </IntroContainer>
          <Products products={categoryProducts}/>
            <Categories/>
            <Presentation/>
            <Footer/>
      </Container>
    </Section>
  )
}

export default ProductCategory