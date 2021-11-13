import styled from 'styled-components';
import { fade } from './animations'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${(props) => props.theme.color.background};
    font-family: ${(props) => props.theme.fonts.mono};
    max-width: 1480px; 
    padding: 0 5%; 
    margin: 0 auto;

    animation: ${fade} 1s;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1440px; 
    padding: 24px;
    margin: 0 auto 26px;
`;

export const Logo = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-right:  auto;
`;

export const Ip = styled.p`
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 22px;
`;

// { HIGHLIGHT }

export const MainSection = styled.div`
    font-family: ${(props) => props.theme.fonts.mono};
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
    padding: 24px;
    margin: 0 auto; 

    img {
        width: 50%;
    }
`;

export const  MainText = styled.div`
    margin-right: 80px;
`;

export const Title = styled.h1`
    font-size: 48px; 
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 24px;
`;

export const Description = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
`;

// { INPUT }
export const IpSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 40px auto 0;

    width: 100%;
    max-width: 740px;

    div {
        display: flex;
        width: 100%;
    }

    h2 {
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 20px;
    }

    input {
        font-family: ${(props) => props.theme.fonts.mono};
        width: 100%;
        height: 45px;
        padding: 10px 20px;

        font-size: 18px;
        border: 3px solid rgba(20, 20, 20, 0.6);
        border-radius: 5px;
    }
    
    button {
        font-family: ${(props) => props.theme.fonts.regular};
        width: 140px;
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
        
        background-color: #3F3D56; //#1B9105
        color: #FFF;
        border: none;
        border-radius: 5px;

        transition: .2s;
    }

    button:hover {
        background-color: #56546b;
    }
`;

//{ Map View }
export const Map = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    img {
        width: 100%;
    }

    border: 1px solid rgba(0, 0, 0, 0.2);
`;

// { Footer }

export const Footer = styled.div `
    height: 50px;
`;