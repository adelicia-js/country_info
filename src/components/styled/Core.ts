import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 400;
        line-height: 1.6;
        overflow-x: hidden;
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    max-width: 1400px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    padding-bottom: 6rem;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const SubContainer = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 60px;
    
    @media (max-width: 768px) {
        padding-top: 40px;
        min-height: calc(100vh - 120px);
    }
`

export const Header = styled.header`
    text-align: center;
    align-self: center;
`;

export const Title = styled.h1`
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 200;
    color: white;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
    letter-spacing: -0.02em;
    
    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }
`;

export const ResultsContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const MessageContainer = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    color: white;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 200;
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
        padding: 25px 20px;
    }
`;
