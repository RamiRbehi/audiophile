import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
import Icon from "../assets/shared/desktop/icon-arrow-right.svg"
import { Mobile, Tablet } from '../Responsive'


const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`
const Container = styled.div`
  width: calc(100% - 250px);
  /* width: 100vmax; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin:  0;

  ${Tablet({margin: "80px 0",
    width: "calc(100% - 150px)"
  })}

  ${Mobile({width: "calc(100% - 50px)"})}
`
const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  ${Tablet({gap: "20px"})}

  ${Mobile({flexDirection: "column",
    gap: "70px"
    })}
`
const Category = styled.div`
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  position: relative;
  gap: 20px;
  border-radius: 10px;
  padding: 30px 0;

  ${Mobile({width: "80vw",})}
`
const Image = styled.img`
  width: 60%;
  position: absolute;
  top: -70px;

  ${Tablet({width: "80%"})}

  ${Mobile({width: "70%",
    top: "-40px"
    })}
`
const Title = styled.h6`
  color: #000000;
  font-size: 18px;
  font-weight: 800;
  padding-top: 60px;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  ${Mobile({paddingTop: 90})}
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
const Button = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: rgba(0, 0, 0, 0.74);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 500;

  &:hover{
    color: #D87D4A;
  }

  &:active{
    color: #D87D4A;
  }
`
const IconArrow = styled.img`
  width: 50%;
  height: 80%;
`
const none = {
  textDecoration: 'inherit',
  color: 'inherit' 
}

const Categories = () => {
  // const [slugName, setSlugName] = useState([]);

  //   useEffect(() => {
  //       const extractedData = jsonData.map((item) => ({
  //           slug: item.slug
  //       }));
  //       setSlugName(extractedData);
  //   }, []);

return (
  <Section>
      <Container>
        <Products>
        <Link style={none} to={`/productcategory/headphones`}>
            <Category>
                <Image src={Headphones} alt="headphones"/>
            <Title>Headphones</Title>
            <ButtonContainer>
            <Button>Shop</Button>
            <IconArrow src={Icon}/>
            </ButtonContainer>
          </Category>
      </Link>

      <Link style={none} to={`/productcategory/speakers`}>
          <Category>
                <Image src={Speakers} alt="speakers"/>
            <Title>Speakers</Title>
            <ButtonContainer>
            <Button>Shop</Button>
            <IconArrow src={Icon}/>
            </ButtonContainer>
          </Category>
          </Link>

      <Link style={none} to={`/productcategory/earphones`}>
          <Category>
                <Image src={Earphones} alt="earphones"/>
            <Title>Earphones</Title>
            <ButtonContainer>
            <Button>Shop</Button>
            <IconArrow src={Icon}/>
            </ButtonContainer>
          </Category>
          </Link>
        </Products>
      </Container>
    </Section>
  )
}

export default Categories