import styled from "styled-components";

const FooterBar = styled.footer`
  width: 100%;
  background: #fff;
  color: #888;
  font-size: 0.95rem;
  padding: 2rem 0 1.2rem 0;
  text-align: center;
  border-top: 1px solid #f3efe6;
  margin-top: 3rem;
`;

export default function Footer() {
  return (
    <FooterBar>
      &copy; {new Date().getFullYear()} maxmilhas. All rights reserved.
    </FooterBar>
  );
}
