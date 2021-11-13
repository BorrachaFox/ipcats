import React from "react";
import styled from "styled-components";

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%; 

    margin: 40px auto;
    border-left: 1px solid #000;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    height: 80px;
    border-right: 1px solid #000;
    font-family: ${(props) => props.theme.fonts.regular};
    text-align: center;

    p {
       font-size: 18px; 
       font-weight: 500;
       color: #4a4a4a;
    }
    
    h2 {
        font-weight: 500;
        font-size: 24px;
        margin-top: 6px;
    }
`;

const SearchResult = (props) => {
    return (
        <Content>
            <Item>
                <p>Cidade, Estado:</p>
                <h2>SALVADOR-BA</h2>
            </Item>
            <Item>
                <p>Ip/Domain:</p>
                <h2>123.09.84.1</h2>
            </Item>
            <Item>
                <p>Continente:</p>
                <h2>AMERICA DO SUL</h2>
            </Item>
            <Item>
                <p>País:</p>
                <h2>BRASIL</h2>
            </Item>
        </Content>
    )
}

export default SearchResult;