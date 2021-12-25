import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const Login = () => {
    let navigate = useNavigate()
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(() => {
      if(localStorage.getItem('token')){
          console.log('logged in');
          navigate('/dashboard')
      }  
    })

    const [data, setData] = useState({
        email:"",
        number:"",
        password:""
    })

    const handleSubmit = async (e) => {
        console.log('submitted');
        e.preventDefault()
        console.log(data);
        let datum = {
            email:data.email,
            password:data.password
        }
        // console.log(JSON.stringify(datum)); 

       await fetch('https://reqres.in/api/login', {
            method:'POST',
            body:JSON.stringify(datum),
            headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(response => {
                if(response.status === '200'){
                    setIsLoggedIn(true)
                }
                return(
                    response.json()
                )
            })
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.token)
                localStorage.setItem('email', data.email)
        })
        if(localStorage.getItem('token')){
            setTimeout(() => {
                window.location.reload()
            },1000)
        }
    }



    return (
        <LoginContainer>
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
               
            <FormContainer onSubmit={handleSubmit}>

                <LoginRegisterDiv>
                        <h2 style={{
                            paddingBottom: '1.5rem',
                            marginBottom: '0',
                            borderBottom: '1px solid #000'
                        }}>Login</h2>
                        <StyledLink to='/register'><h2>Register</h2></StyledLink>
                </LoginRegisterDiv>

                <EmailPassContainer>

                    <label htmlFor='emailNum'>Email/Mobile Number</label>
                    <input 
                        onChange={e => setData(prev => {
                            //     if((e.target.value).includes('@')){
                            //         console.log('email');
                            //         return({
                            //             ...prev,
                            //             email: e.target.value
                            //         })
                            //     } else{
                            //         return({
                            //             ...prev,
                            //             number: e.target.value
                            //         })
                            //     }
                            // }
                            return({
                                ...prev,
                                email:e.target.value
                            })
                        }
                        )} 
                        required 
                        id='emailNum' 
                        type='text' 
                        placeholder='enter email' 
                        value={data.email || data.number}
                        
                    />

                    <label htmlFor='password'>Password</label>
                    <input 
                        onChange={e => setData(prev => {
                            return({
                                ...prev,
                                password: e.target.value
                            })
                        })} 
                        required 
                        id='password' 
                        type='password' 
                        placeholder='enter password' 
                        value={data.password}
                    />

                    <p>Forgot Password</p>

                    <LoginBtn type='submit'>LOGIN</LoginBtn>
                    <p style={{textAlign:'center', color:'rgb(0,0,0,0.6)'}}>Not a member yet? <StyledLink to="/register"><span>Register</span></StyledLink></p>

                </EmailPassContainer>

            </FormContainer>

        </LoginContainer>

    )
}


const LoginContainer = styled.div`
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

`
const WelcomeTextDiv = styled.div`
    /* width: 40%; */
`
const FormContainer = styled.form`
    background-color: #fff;
    color:#3d3d3d;
    /* height: 72vh; */
    align-self: center;
    border-radius: 1.5rem;
    width: 20%;
    padding: 4rem;
`
const LoginRegisterDiv = styled.div`
    display: flex;
    /* background-color: #aaa; */
    justify-content: space-evenly;
    border-bottom: 1px solid #000;
    margin-bottom: 2rem;
   
`
const EmailPassContainer = styled.div`
    display: flex;
    flex-direction: column;

    label{
        margin-top: .8rem;
        margin-bottom:.3rem;
        font-size: .8rem;
    }
    input{
        padding: 1rem;
        border-radius: .5rem;
        border-color: rgb(0,0,0,0.5);
    }
    p{
        text-align: right;
        font-size: .85rem;
    }
    span{
        color: #3d3d3d;
    }
`
const LoginBtn = styled.button`
    margin-top: 7rem;
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