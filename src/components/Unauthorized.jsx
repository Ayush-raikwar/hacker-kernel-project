import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Unauthorized = () => {
    return(
        <Div>
            <h1>You are unauthorized to view this page.</h1>
            <pre>Please <Link to="/login">Login</Link> here!</pre>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`