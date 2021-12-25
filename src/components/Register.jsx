import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export const Register = () => {

    let navigate = useNavigate() 
    useEffect(() => {
        console.log(window.location.href);
        if((window.location.href).includes('register')){
            console.log('register route');
        }
        if(localStorage.getItem('token')){
            navigate('/dashboard')
        }
    })

    return (
        <RegisterContainer>
            <WelcomeContainer>
                {/* <img src=".\images\asset2.png" alt="bob and vegene"/> */}
                <img src={require("./images/asset2.png")} alt="pic" />
                <WelcomeTextDiv>
                    <h1>Welcome</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </WelcomeTextDiv>


            </WelcomeContainer>
               
            <FormContainer >

                <LoginRegisterDiv>
                        <StyledLink to='/login'><h2>Login</h2></StyledLink>
                        <h2>Register</h2>
                </LoginRegisterDiv>

                <EmailPassContainer>

                    <label htmlFor='fullName'>Full Name</label>
                    <input 
                       
                        required 
                        id='fullName' 
                        type='text' 
                        placeholder='enter full name' 
                       
                        
                    />

                    <label htmlFor='email'>Email</label>
                    <input 
                       
                        required 
                        id='email' 
                        type='text' 
                        placeholder='enter email' 
                       
                        
                    />  

                    <label htmlFor='mobileNo'>Mobile Number</label>
                    <input 
                       
                        required 
                        id='mobileNo' 
                        type='number' 
                        placeholder='enter mobile number' 
                       
                        
                    />

                    <label htmlFor='gender'>Gender</label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor='password'>Password</label>
                    <input 
                       
                        required 
                        id='password' 
                        type='password' 
                        placeholder='enter password' 
                       
                        
                    />

                    <label htmlFor='confirmPassword'>Password</label>
                    <input 
                       
                        required 
                        id='confirmPassword' 
                        type='password' 
                        placeholder='confirm password' 
                        
                    />

                    <p>Forgot Password</p>

                    <RegisterBtn type='submit'>REGISTER</RegisterBtn>
                    <p style={{textAlign:'center', color:'rgb(0,0,0,0.6)'}}>Already a member? <StyledLink to="/login"><span>Login</span></StyledLink></p>

                </EmailPassContainer>

            </FormContainer>

        </RegisterContainer>
    )
}



const RegisterContainer = styled.div`
    font-family: 'Comfortaa', cursive;
    color:#fff;
    background-color: #192b3f;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    p{
        font-weight: 900;
    }
    @media(max-width: 950px){
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
    }

`
const WelcomeContainer = styled.div`
    padding: 5rem;
    width: 40%;
    align-items: center;
    align-content: center;
    align-self: center;

    img{
        width: 50%;
    }
    @media(max-width:950px){
        width:auto;
        text-align: center;
        img{
            width: 90%;
        }
    }

`
const WelcomeTextDiv = styled.div`
    /* width: 40%; */
    @media(max-width:950px) {
        align-self: center;
        align-content: center;
        /* width: 50%; */
        display: block;
        text-align: center;
    }
`
const FormContainer = styled.form`
    background-color: #fff;
    color:#3d3d3d;
    /* height: 72vh; */
    align-self: center;
    border-radius: 1.5rem;
    width: 20%;
    padding: 4rem;
    @media(max-width:950px){
        width: 65%;
        text-align: center;
        display: block;
        justify-content: center;
    }
`
const LoginRegisterDiv = styled.div`
    display: flex;
    /* background-color: #aaa; */
    justify-content: space-evenly;
    border-bottom: 1px solid #000;
    margin-bottom: 2rem;
    h2:nth-child(2){
        padding-bottom: 1.5rem;
        margin-bottom: 0;
        border-bottom: 1px solid #000;
    }
`
const EmailPassContainer = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin-top: .8rem;
        margin-bottom:.3rem;
        font-size: .8rem;
    }
    input, select{
        padding: 1rem;
        border-radius: .5rem;
        border-color: rgb(0,0,0,0.5);
        &:active{
            background-color: #fff;
        }
    }
    p{
        text-align: right;
        font-size: .85rem;
    }
    span{
        color: #3d3d3d;
        text-decoration: none;
    }
`
const RegisterBtn = styled.button`
    margin-top: 1rem;
    background-color: #485867;
    justify-content: center;
    padding: 1rem 5rem;
    justify-content: center;
    align-self: center;
    border:none;
    color:#fff;
    font-weight: 900;
    border-radius: .5rem;
    transition: filter .1s;
    &:hover{
        filter: contrast(1.7);
        cursor: pointer;
        transition: filter .1s;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`