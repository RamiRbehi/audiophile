import styled from "styled-components"
import YX1 from "./Products/YX1"
import ZX7 from "./Products/ZX7"
import ZX9 from "./Products/ZX9"

const Section = styled.div`
    width: 100%;
    /* height: 130vh; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 30px;
`

const MainProducts = () => {
  return (
    <Section>
        <ZX9/>
        <ZX7/>
        <YX1/>
    </Section>
  )
}

export default MainProducts