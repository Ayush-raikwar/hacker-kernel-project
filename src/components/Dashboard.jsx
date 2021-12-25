import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BodyComponent } from "./BodyComponent";
import { Navbar } from "./Navbar";
import { SideNav } from "./SideNav";

export const Dashboard = () => {

    const [isNavCollapse, setIsNavCollapse] = useState(false)

    return(
       <Div>
        <Navbar />
        <CollapseSidenavBtn onClick={() => setIsNavCollapse(prev => !prev)}>&#8618;</CollapseSidenavBtn>
        {isNavCollapse ? (
        <StyledSidenav>
            <SideNav />
        </StyledSidenav>
        ) : (<SideNav />) }

        <BodyComponent />

       </Div>
    )
}

const Div = styled.div`
    position: relative;
    transition: position 1s;
`
const CollapseSidenavBtn = styled.button`
    margin-left: 1rem;
    border-radius: 1rem;
    border:none;
    padding: .5rem .7rem;
    background-color: #c7c7c7;
    margin:1rem;
    &:hover{
        background-color: rgb(0,0,0,.3);
    }
`

const StyledSidenav = styled.div`
    transition: position 1s;
    position: absolute;
    left: -1000px;

`