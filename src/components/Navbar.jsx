import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as BellIcon} from './images/notifications-bell-button.svg'
export const Navbar = () => {

    const [width, setWidth] = useState(0)
    const [modalTriggered, setModalTriggered] = useState(false)
    const [navbarTrigger, setNavbarTrigger] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }   
    })
    useEffect(() => {
        
        const updateWidth = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth)
        }
        
        window.addEventListener('resize', updateWidth)
        return() => window.removeEventListener('resize', updateWidth)
        
    },[])


    const handleLogout = () => {
        localStorage.clear()
        console.log('logout');
        window.location.reload()
    }

    return(
        
        <NavBarContainer>
            {navbarTrigger ? (
                <>
                <NavBrandDiv>
                    <img src={require('./images/asset2.png')} alt='logo'/>
                    <h4>My Wallet</h4>
                </NavBrandDiv>
                <NavRightDiv>
                    <BalanceDiv>
                        <p>Rs 1500.00</p>
                        <p>Wallet Balance</p>
                    </BalanceDiv>
                    <BellIconDiv>
                        {/* <svg src={'./images/notifications-bell-button.svg'} alt='bell' /> */}
                        <BellIconImg />

                    </BellIconDiv>
                    <UserDetailsDiv>
                        <NameEmailDiv>
                            <h4>Akash Bansal</h4>
                            <p>{localStorage.getItem('email')? (localStorage.getItem('email')):('dummymail.com')}</p>
                        </NameEmailDiv>
                        <img src='https://yt3.ggpht.com/ytc/AKedOLS4_DD5Z0B4rEyX-XulluB5RdQ5J8y-jqqlfUL0_g=s900-c-k-c0x00ffffff-no-rj' alt='useImg'/>
                        <DropdownBtn onClick={() => setModalTriggered(prev => !prev)}>&#8964;</DropdownBtn>
                        
                        {modalTriggered ? (
                            <ModalDropdown>
                            <h4>Home</h4>
                            <h4 onClick={handleLogout}>Logout</h4>
                        </ModalDropdown>
                        ):null}
                        
                    </UserDetailsDiv>
                </NavRightDiv>
                </>

            ):null}
            {window.innerWidth>950? (
                <NavRightDiv>
                <BalanceDiv>
                    <p>Rs 1500.00</p>
                    <p>Wallet Balance</p>
                </BalanceDiv>
                <BellIconDiv>
                    {/* <svg src={'./images/notifications-bell-button.svg'} alt='bell' /> */}
                    <BellIconImg />

                </BellIconDiv>
                <UserDetailsDiv>
                    <NameEmailDiv>
                        <h4>Akash Bansal</h4>
                        <p>{localStorage.getItem('email')? (localStorage.getItem('email')):('dummymail.com')}</p>
                    </NameEmailDiv>
                    <img src='https://yt3.ggpht.com/ytc/AKedOLS4_DD5Z0B4rEyX-XulluB5RdQ5J8y-jqqlfUL0_g=s900-c-k-c0x00ffffff-no-rj' alt='useImg'/>
                    <DropdownBtn onClick={() => setModalTriggered(prev => !prev)}>&#8964;</DropdownBtn>
                    
                    {modalTriggered ? (
                        <ModalDropdown>
                        <h4>Home</h4>
                        <h4 onClick={handleLogout}>Logout</h4>
                    </ModalDropdown>
                    ):null}
                    
                </UserDetailsDiv>
            </NavRightDiv>
            ):null}


            {((width<950)&& window.innerWidth<950) ? (<CollapseBtn onClick={() => setNavbarTrigger(prev => !prev)}>☰</CollapseBtn>) : null}
        </NavBarContainer>
        
    )
}

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .4rem 1rem ;
    border-bottom: 1px solid;
    font-family: 'Comfortaa', cursive;
    position: relative;
    @media(max-width:950px){
        display: flex;
        flex-direction: column;
        text-align: center;
        *{
            font-size: 1.5rem;
        }
    }
`

const NavBrandDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        border-radius: 20px ;
        /* transform: rotate(30deg); */
    }
    h4{
        margin-left: .6rem;
    }
    @media(max-width:950px){
        display: block;
        margin:1rem;
    }
`
const NavRightDiv = styled.div`
    display: flex;
    *{
        margin:0;
    }
    @media(max-width:950px){
        display: block;
        div{
            margin:1rem;
        }
    }
`
const BalanceDiv = styled.div`
    justify-content: center;
    align-self: center;
    p:nth-child(2){
        color: rgba(0,0,0,.5);
        font-size: .85rem;
        margin-top: .3rem;
    }
`
const BellIconDiv = styled.div`
    align-content: center;
    align-items: center;
    align-self: center;
    border-left: 1px solid;
    border-right: 1px solid;
    margin: auto 1rem;
    @media(max-width:950px){
        display: block;
        border:none;
    }
`
const BellIconImg = styled(BellIcon)`
    width: 80px;
    height: 30px;
    text-align: center;
`
const UserDetailsDiv = styled.div`
    display: flex;
    align-items:center;
    img{
        width: 45px;
        border-radius: 40px;
        margin: auto 1rem;
    }
    @media(max-width:950px){
        display: flex;
        flex-direction: column;
    }
`
const NameEmailDiv = styled.div`
    p{
        color: rgba(0,0,0,.5);
        font-size: .85rem;
        margin-top: .3rem;
    }
`
const DropdownBtn = styled.button`
    border-radius: 100%;
    justify-content: center;
    align-self: center;
    padding: .30rem .40rem;
    font-size: .6rem;
    background-color: rgb(0,0,0,.6);
    color: #fff;
    font-weight: 900;
    border:none;
    cursor: pointer;
    @media(max-width:950px){
        display: block;
        text-align: center;
        align-self: center;
        margin:1rem;
        padding: 1rem 1.3rem;
    }
`
const ModalDropdown = styled.div`
    background-color: #aaa;
    padding: 1rem 2rem 1rem 1rem;
    position: absolute;
    right: 17px;
    top:80px;
    transition: position 1s;
    h4{
        margin-top:.5rem;
        margin-bottom: .5rem;
        cursor: pointer;
    }
    h4:nth-child(2){
        border-top: 1px solid;
        padding-top: .5rem;
    }
    @media(max-width:950px){
        left: 4%;
        top:95%;
    }

`
const CollapseBtn = styled.h1`
    cursor: pointer;
`