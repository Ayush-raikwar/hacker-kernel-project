import React from "react";
import styled from "styled-components";
import { ReactComponent as PhoneIcn } from "./images/contact.svg";
import { ReactComponent as PaymentIcn } from "./images/card-payment.svg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as CameraIcn } from "./images/camera.svg";
import { ReactComponent as FoodIcn } from "./images/hamburger.svg";
import { ReactComponent as ClothIcn } from "./images/jacket.svg";
import { ReactComponent as TravelIcn } from "./images/air-freight.svg";
import { ReactComponent as FitnessIcn } from "./images/barbell.svg";
import { ReactComponent as MedicalIcn } from "./images/first-aid-kit.svg";
import { ReactComponent as GroomingIcn } from "./images/makeup.svg";




export const BodyComponent = () => {
    return(
        <BodyContainer>
            <PayRechargeDiv>
                <PhoneIcon />
                <PayRechargeBtns>
                    <p>Pay</p>
                    <p>Recharge</p>
                </PayRechargeBtns>
                <PaymentIcon />
            </PayRechargeDiv>
            <SearchBar>

            </SearchBar>
            <Container>
                <StyledRow>
                    <Col><CameraIcon /></Col>
                    <Col><FoodIcon /></Col>
                    <Col><ClothIcon /></Col>
                    <Col><TravelIcon /></Col>
                    <Col><FitnessIcon /></Col>
                    <Col><MedicalIcon /></Col>
                    <Col><GroomingIcon /></Col>
                </StyledRow>
            </Container>
            <h1>helloo</h1>
        </BodyContainer>
    )
}

const BodyContainer = styled.div`
    background-color: #f6f6f6;
    padding: 1.5rem;
    position: absolute;
    top:8.2%;
    left: 18%;
    height: 100vh;
    width: 78.2%;
    font-family: 'Comfortaa', cursive;
    text-align: center;
`
const PayRechargeDiv = styled.div`
    display: flex;
    justify-content: center;
`
const PhoneIcon = styled(PhoneIcn)`
    width: 30px;
    height: 30px;
    margin:auto 1.5rem;
    border-radius: 2rem;
    padding: .5rem;
    background-color: #fff;
`
const PayRechargeBtns = styled.div`
    display: flex;
    border-radius: 1rem;
    align-content: center;
    align-items: center;
    p{
        padding: .5rem 2rem;
        font-weight: 900;
    }
    p:nth-child(1){
        background-color: #485867;
        border-radius: 1.5rem 0 0 1.5rem;
        color:#fff;
    }
    p:nth-child(2){
        background-color: #e9e9e9;
        border-radius: 0 1.5rem 1.5rem 0;
    }
`
const PaymentIcon = styled(PaymentIcn)`
    width: 30px;
    height: 30px;
    margin:auto 1.5rem;
    padding: .5rem;
    background-color:#485867;
    border-radius: 2rem;
`
const SearchBar = styled.input`
    width: 80%;
    padding: .8rem;
    border-radius: 1.8rem;
    border:.5px solid;
    margin:1rem auto;
`
const StyledRow = styled(Row)`
    display: flex;
    justify-content: space-evenly;
`
const CameraIcon = styled(CameraIcn)`
    background-color:#e9e9e9;
    width:40px;

`
const FoodIcon = styled(FoodIcn)`
    background-color:#e9e9e9;
    width:40px;
    height: 40px;
`
const ClothIcon = styled(ClothIcn)`
    background-color:#e9e9e9;
    width:40px;
    height: 40px;
`
const TravelIcon = styled(TravelIcn)`
    background-color:#e9e9e9;
    width:40px;
    height: 40px;
`
const FitnessIcon = styled(FitnessIcn)`
    background-color:#e9e9e9;
    width:40px;
    height: 40px;
`
const MedicalIcon = styled(MedicalIcn)`
    background-color:#e9e9e9;
    width:40px;
    height: 40px;
`
const GroomingIcon = styled(GroomingIcn)`
    background-color:#e9e9e9;
    width:40px;
    height: 40px;
`