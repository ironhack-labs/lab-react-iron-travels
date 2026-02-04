import styled from "styled-components";

const HeaderBar = styled.header`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px 0 #e6e2d8cc;
  padding: 1.2rem 0.5rem 1.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #a88c4a;
  letter-spacing: 0.01em;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: #181818;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #a88c4a;
  }
`;

const CtaButton = styled.a`
  background: #a88c4a;
  color: #fff;
  border: none;
  border-radius: 1.2rem;
  padding: 0.6rem 1.3rem;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 1.5rem;
  text-decoration: none;
  transition: background 0.2s;
  box-shadow: 0 2px 8px 0 #a88c4a22;
  &:hover {
    background: #181818;
  }
`;

export default function Header() {
  return (
    <HeaderBar>
      <Logo>Goldmonkey Journeys</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#experiences">Experiences</NavLink>
        <NavLink href="#favorites">Favorites</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <CtaButton href="#request">Request a Journey</CtaButton>
      </Nav>
    </HeaderBar>
  );
}
