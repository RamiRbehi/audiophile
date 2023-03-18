import styled from "styled-components"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import MainProducts from "../components/MainProducts"
import Presentation from "../components/Presentation"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`

const Home = () => {
  return (
    <Section>
    <Intro/>
    <Categories/>
    <MainProducts/>
    <Presentation/>
    <Footer/>
    </Section>
  )
}

export default Home