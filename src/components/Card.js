import React from "react";
import styled from "styled-components";
const Container = styled.div`
    width: 500px;
    height: 300px;
    border: 1px solid #f2eded;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 5px 10px 5px  #f2eded;
    color: grey;

`;
const Logo = styled.img`
    width:50%;
    border: 1px solid #f2eded;

`;
const Header = styled.div`
    display:flex;
    height:66%;
    border-bottom: 1px solid #f2eded;
 `;
const CardText = styled.div`
    margin: 20px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
`;
const CardTitle = styled.h2`
    font-weight: 400;
    margin: 0 20px;
    color: #000;
`;

function Card(){
    return (
        <Container>
            <Header>
                <Logo src="logo512.png" alt="Logo React"/>
                <CardText>
                    <CardTitle>
                        React
                    </CardTitle>
                    <p>
                        React can be used as a base in the development of single-page or mobile applications.
                    </p>
                    <p> Current LTS Version: 16.13.1</p>
                </CardText>
            </Header>
            <div>
                Comments:
            </div>
        </Container>
    )
}
export default Card