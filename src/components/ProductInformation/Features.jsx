import React from 'react'
import styled from 'styled-components'
import { Mobile, Tablet } from '../../Responsive'

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
`
const Container = styled.div`
    width: calc(100% - 250px);
    /* margin-top: 80px; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Tablet({width: "calc(100% - 150px)"})}

    ${Mobile({width: "calc(100% - 50px)"})}
`
const FeaturesCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 40px;

    ${Tablet({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 30px;
`
const Title = styled.h3`
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 600;
`
const Desc = styled.p`
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 500;
    color: #101010;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;

    ${Tablet({flexDirection: "row"})}
    ${Mobile({flexDirection: "column", gap: 20})}
`
const FeatureList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 5px;

    ${Tablet({paddingLeft: 100})}
    ${Mobile({paddingLeft: 0})}
`
const Box = styled.ul`
    list-style: none;
`
const Span = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: #101010;
    color: ${props => props.color === "red" && "#D87D4A"};
    margin-left: ${props => props.margin === "space" && "20px"};
`
const ListBox = styled.li`
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 500;
    color: #101010;
`


const Features = ({Detail}) => {
  return (
    <Section>
        <Container>
            <FeaturesCard>
            <Left>
                <Title>Features</Title>
                <Desc>{Detail.features}</Desc>
            </Left>
            <Right>
                <Title>In the Box</Title>
                <FeatureList>
                    {Detail.includes.map((item) => (
                        <Box key={item.id}>
                        <ListBox>
                        <Span color="red">{item.quantity} x</Span>
                        <Span margin="space">{item.item}</Span>
                    </ListBox>
                </Box>
                        ))}
                        </FeatureList>
            </Right>
            </FeaturesCard>
        </Container>
    </Section>
  )
}

export default Features