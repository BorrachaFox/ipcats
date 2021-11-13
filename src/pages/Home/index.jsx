import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import { Container, Header, Logo, Ip, MainText, Title, Description, MainSection, IpSearch, Map, Footer } from './styles';
import { SearchResult } from '../../components';

import SvgWorld from '../../assets/img/connected-world.svg'
import MapImage from '../../assets/img/map.png'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.regular};
    }
`;

const Home = () => {
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Header>
                    <Logo>IpCats</Logo>
                    <Ip>IP: 123.09.84.1</Ip>
                </Header>
                <MainSection>
                    <MainText>
                        <Title>SITE PARA BUSCAR IP</Title>
                        <Description>Criado com o intuito de buscar por IP de maquinas e dominios de sites</Description>
                    </MainText>                
                    <img src={SvgWorld} alt="Connected world"/>
                </MainSection>
                <IpSearch>
                    <h2>DIGITE O IP/DOMINIO DESEJADO:</h2>
                    <div>
                        <input type="text" id="SearchIp" name="SearchIp" placeholder="IP/DOMAIN"/>
                        <button>Search</button>
                    </div>
                </IpSearch>
                <SearchResult/>
                <Map>
                    <img src={MapImage} alt="Location map" width="" />
                </Map>
                <Footer/>
            </Container>
        </>
    )
}

export default Home;
