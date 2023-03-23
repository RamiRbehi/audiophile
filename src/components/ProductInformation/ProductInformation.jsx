import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ProductsContext } from '../../ProductProvider'
import { addProduct } from '../../redux/cartRedux'
import { Mobile, Tablet } from '../../Responsive'
import CartCard from '../CartCard'

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    gap: 100px;
    justify-content: center;

    ${Tablet({width: "calc(100% - 150px)",
        paddingBottom: 100})}

    ${Mobile({width: "calc(100% - 50px)"})}
`
const ButtonDiv = styled.div`
`
const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #101010;
    font-weight: 300;
    cursor: pointer;
`
const ProductDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    margin-top: 50px;

    ${Mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
`
const Picture = styled.picture`
`
const Source = styled.source`
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    padding: 0 50px;

    ${Tablet({ padding: "0 10px"})}
    ${Mobile({padding: "0"})}
`
const Overline = styled.p`
    letter-spacing: 8px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 400;
    color: #D87D4A;
`
const Title = styled.h2`
    font-size: 40px;
     font-weight: 800;
     color: #101010;
    letter-spacing: 1.5px;
`
const Desc = styled.p`
    font-size: 15px;
     font-weight: 500;
     color: #101010;
     letter-spacing: 1px;
     line-height: 1.5;
`
const Price = styled.p`
`
const AddContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`
const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #f1f1f1;
    padding: 0 30px;
`
const Amount = styled.span`
`
const MinusPlus = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`
const Add2Cart = styled.button`
    padding: 10px 30px;
    color: #fff;
    background-color: #D87D4A;
    border: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
    background-color: #FBAF85;
  }

  &:active{
    background-color: #FBAF85;
    }
`

const ProductInformation = () => {
    const gettingProducts = useContext(ProductsContext);
    const {slug} = useParams();        
    const productInfo = gettingProducts.find(
        (item) => item.slug === slug);
    
        if (!productInfo) {
            return <div>Product not found</div>;
          }
    
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name: productInfo.name,
        price: productInfo.price,
        image: productInfo.image.desktop,
        quantity: 1,
    });
    const navigate = useNavigate();

  

    const HandleQuantity = useCallback((type) => {
        if (type === "dec") {
            product.quantity > 1 &&
                setProduct({...product, quantity: product.quantity - 1});
        } else {
            setProduct({...product, quantity: product.quantity + 1});
        }
    },
    [product]
    );

    
    const handleClick =  () => {
        dispatch(addProduct(product));
    };
          
        
          return (
    <Section>
        <Container>
            <ButtonDiv>
                <Button onClick={() => navigate(-1)}>Go Back</Button> 
            </ButtonDiv>

                <ProductDetails>
                <Left>
                    <Picture>
                        <Source media='(max-width: 375px)' srcSet={productInfo.image.mobile}/>
                        <Source media='(max-width: 768px)' srcSet={productInfo.image.tablet}/>
                        <Source media='(min-width: 769px)' srcSet={productInfo.image.desktop}/>
                        <Image src={productInfo.image.desktop} alt={productInfo.name}/>
                    </Picture>
                </Left>
                <Right>
                    <Overline>{productInfo.new ? "New Product" : ""}</Overline>
                    <Title>{productInfo.name}</Title>
                    <Desc>{productInfo.description}</Desc>
                    <Price>$ {productInfo.price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <MinusPlus onClick={() => HandleQuantity("dec")}>-</MinusPlus>
                            <Amount>{product.quantity}</Amount>
                            <MinusPlus onClick={() => HandleQuantity("inc")}>+</MinusPlus>
                        </AmountContainer>
                            <Add2Cart onClick={handleClick}>Add to Cart</Add2Cart>
                    </AddContainer>
                </Right>
            </ProductDetails>
        </Container>
    </Section>
  )
}

export default ProductInformation