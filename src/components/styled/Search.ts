import styled from "styled-components";

export const SearchContainer = styled.div`
    max-width: 500px;
    margin: 0 auto 40px;
    position: relative;
    width: 100%;
    
    @media (max-width: 768px) {
        max-width: 100%;
        margin: 0 auto 30px;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 18px 60px 18px 30px;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 200;
    border: none;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    color: white;
    outline: none;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-weight: 200;
    }

    &:focus {
        background: rgba(255, 255, 255, 0.25);
        transform: scale(1.02);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
    }
    
    @media (max-width: 768px) {
        padding: 16px 55px 16px 25px;
        &:focus {
            transform: scale(1.01);
        }
    }
    
    @media (max-width: 480px) {
        padding: 14px 50px 14px 20px;
    }
`;

export const SearchButton = styled.button`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(238, 90, 36, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: translateY(-50%) scale(1.05);
        box-shadow: 0 6px 20px rgba(238, 90, 36, 0.6);
    }
    
    &:active {
        transform: translateY(-50%) scale(0.95);
    }
    
    @media (max-width: 768px) {
        width: 38px;
        height: 38px;
        font-size: 1.1rem;
        right: 6px;
    }
    
    @media (max-width: 480px) {
        width: 35px;
        height: 35px;
        font-size: 1rem;
        right: 5px;
    }
`;
