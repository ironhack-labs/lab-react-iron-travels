import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  min-height: 340px;
  background: linear-gradient(120deg, #e6f7ee 60%, #f7e7b4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 1rem 2.5rem 1rem;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 600px;
  background: rgba(255,255,255,0.85);
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px 0 #e6e2d8cc;
  padding: 2.5rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #181818;
  margin-bottom: 0.7rem;
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  color: #a88c4a;
  margin-bottom: 1.2rem;
`;

const Desc = styled.p`
  font-size: 1.05rem;
  color: #444;
  margin-top: 0.5rem;
  line-height: 1.5;
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Live your journey to the fullest</Title>
        <Subtitle>Find the best flights and hotels for your next journey.</Subtitle>
        <Desc>Compare prices, discover exclusive offers, and travel smarter with maxmilhas metasearch.</Desc>
      </HeroContent>
    </HeroSection>
  );
}