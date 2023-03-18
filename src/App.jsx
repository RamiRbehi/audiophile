import styled from "styled-components"
import ProductDetail from "./pages/ProductDetail"
import ProductCategory from "./pages/ProductCategory"
import Home from "./pages/Home";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CartCard from "./components/CartCard";
import Checkout from "./pages/Checkout";
import ThankCard from "./components/ThankCard";

const Container = styled.div`
    height: 100%;
    /* scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none; */
    background-color: #fafafa;
    position: relative;
    
    /* &::-webkit-scrollbar{
      display: none;
    } */
  `

function App() {

  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/*" element={<Home/>}/>
          <Route path="/productcategory/:slug" element={<ProductCategory/>}/>
          <Route path="/productdetail/:slug" element={<ProductDetail/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </Container>
  )
}

export default App
