import React, { useState } from 'react'
import styled from 'styled-components'
import cashOnDelivery from '../../assets/checkout/icon-cash-on-delivery.svg'
import { Mobile, Tablet } from '../../Responsive'

const CheckoutDiv = styled.div`
  background-color: #ffffff;
  width: 700px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;

  ${Tablet({width: 580})}

  ${Mobile({width: 290})}
`
const TitleCheckout = styled.h2`
  font-size: 40px;
`
const CategoryForm = styled.p`
  color: #D87D4A;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
`
const CheckoutParts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  flex-basis: ${props=> props.flexBasis === "100%" && "100%"};
  position: relative;
`
const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.hasError ? "red" : "#000"};
`
const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  position: absolute;
  right: 0;
`
const Input = styled.input`
  padding: 5px;
  width: 300px;
  width: ${props=> props.width === "full-width" && "96%"};
  border-radius: 10px;
  border: solid 2px #f1f1f1;
  
  padding: 10px;

  &:focus{
    border: solid 2px ${props => (props.hasError ? "red" : "#D87D4A")};
    outline: none;
  }

  ${Tablet({width: 260})}

  ${Mobile({width: 270})}
`
const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;

  ${Mobile({flexDirection: "column",
    justifyContent: "center"})}
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormCheckbox = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;  
`
const LabelCheckbox = styled.label`
  display: flex;
  gap: 20px;
  border: solid  2px #D87D4A;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
`
const CheckboxInput = styled.input`
  accent-color: #D87D4A;
`
const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
const CashOnDeliveryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  place-items: center;
  gap: 40px;
`
const CashOnDeliveryImage = styled.img`
`
const CashOnDeliverydesc = styled.p`
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 300;
`

const CheckoutForm = () => {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [clickedInput, setClickedInput] = useState(false);
  const [cashDesliveryVisible , setCashDesliveryVisible] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(value)) {
      setEmailError("Wrong Format");;
    } else {
      setEmailError("");
    }
  };

  const handleClick = () => {
    // setClickedInput(clickedInput);
    setCashDesliveryVisible(true);
  };

  const handleClose = () => {
    // setClickedInput(clickedInput);
    setCashDesliveryVisible(false);
  };

  return (
<CheckoutDiv>
          <TitleCheckout>Checkout</TitleCheckout>
          <CategoryForm>BILLING DETAILS</CategoryForm>
          <CheckoutParts>
          <Form>
            <Label>Name</Label> 
              <Input type="text"/>
          </Form>
          <Form>
            <Label hasError={emailError}>Email Address</Label>
            {emailError && <ErrorText>{emailError}</ErrorText> }
              <Input type="email" 
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                  hasError={emailError}/>
          </Form>
          <Form>
            <Label>Phone Number</Label> 
              <Input type="tel"/>
          </Form>
          </CheckoutParts>


          <CategoryForm>SHIPPING INFO</CategoryForm>
          <CheckoutParts>
          <Form flexBasis="100%">
            <Label>Address</Label> 
              <Input width="full-width" type="text"/>
          </Form>
          <Form>
            <Label>ZIP Code</Label> 
              <Input type="number"/>
          </Form>
          <Form>
            <Label>City</Label> 
              <Input type="text"/>
          </Form>
          <Form>
            <Label>Country</Label> 
              <Input type="text"/>
          </Form>
          </CheckoutParts>


          <CategoryForm>PAYMENT DETAILS</CategoryForm>
          <PaymentOptions>
            <Label>Payment Method</Label>
            
            <Options>
              <FormCheckbox>
                <LabelCheckbox>
                 <CheckboxInput onClick={handleClose} type="radio" name="radio" value="emoney"/>
                   e-Money
               </LabelCheckbox>

                <LabelCheckbox>
                  {!clickedInput && 
                 <CheckboxInput onClick={handleClick} type="radio" name="radio" value="cash"/>
                  }
                    Cash on Delivery
                 </LabelCheckbox>
              </FormCheckbox>
            </Options>
          </PaymentOptions>

              <CardInfo>
                <Form>
                  <Label>e-Money Number</Label>
                  <Input type="text"/>
                </Form>
                <Form>
                  <Label>e-Money PIN</Label>
                  <Input type="password" maxLength={6} required inputMode='numeric'/>
                </Form>
              </CardInfo>

          {cashDesliveryVisible && 
             <CashOnDeliveryDiv>
                <CashOnDeliveryImage src={cashOnDelivery}/>
                <CashOnDeliverydesc>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</CashOnDeliverydesc>
             </CashOnDeliveryDiv>
          }
        </CheckoutDiv>
    )
}

export default CheckoutForm