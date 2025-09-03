import styled from "styled-components";

export const FlagContainer = styled.div`
  margin-bottom: 10px;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-bottom: 15px;
  }
`;

export const Flag = styled.img`
  width: min(140px, 100%);
  height: 85px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  margin: 10px auto;
  position: relative;
  overflow: hidden;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: min(160px, 100%);
    height: 96px;
  }

  @media (max-width: 480px) {
    width: min(140px, 100%);
    height: 84px;
  }
`;

export const InfoCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    gap: 15px;
  }
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 40vh;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    min-height: auto;
    padding: 22px;
  }

  @media (max-width: 768px) {
    padding: 20px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    padding: 18px;
  }
`;

export const CardTitle = styled.div`
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 300;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  justify-content: center;

  @media (max-width: 1024px) {
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    text-align: left;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 12px;
  }
`;

export const CardContent = styled.div`
  color: white;
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  line-height: 1.6;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 2px 0;
    }
  }

  @media (max-width: 1024px) {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
`;

export const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const StatLabel = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  min-width: 70px;
`;

export const StatValue = styled.span`
  color: white;
  font-weight: 500;
  text-align: right;

  @media (max-width: 480px) {
    text-align: left;
  }
`;

export const CountryListContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

export const CountryName = styled.p`
  color: white;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 500;
  margin: 0;
`;

export const ShowButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(238, 90, 36, 0.4);
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(238, 90, 36, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }
`;
