import styled from "styled-components";
import { useState } from "react";

const SearchSection = styled.section`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 16px 0 #e6e2d8cc;
  border-radius: 1.5rem;
  margin: -3rem auto 2.5rem auto;
  max-width: 900px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  position: relative;
  z-index: 5;
`;

const Tabs = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "#a88c4a" : "#181818")};
  border-bottom: 2.5px solid ${({ $active }) => ($active ? "#a88c4a" : "transparent")};
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  transition: color 0.2s, border 0.2s;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: 1px solid #e6e2d8;
  border-radius: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  background: #faf9f6;
  min-width: 180px;
`;

const Select = styled.select`
  border: 1px solid #e6e2d8;
  border-radius: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  background: #faf9f6;
`;

const Button = styled.button`
  background: #a88c4a;
  color: #fff;
  border: none;
  border-radius: 0.7rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #181818;
  }
`;

export default function SearchBar() {
  const [tab, setTab] = useState("flights");
  return (
    <SearchSection>
      <Tabs>
        <Tab $active={tab === "flights"} onClick={() => setTab("flights")}>Flights</Tab>
        <Tab $active={tab === "hotels"} onClick={() => setTab("hotels")}>Hotels</Tab>
      </Tabs>
      <Form>
        <Select>
          <option>Economy</option>
          <option>Business</option>
        </Select>
        <Select>
          <option>Round trip</option>
          <option>One way</option>
        </Select>
        <Input placeholder="From" />
        <Input placeholder="To" />
        <Input type="date" />
        <Input type="date" />
        <Select>
          <option>1 adult</option>
          <option>2 adults</option>
          <option>3 adults</option>
        </Select>
        <Button type="submit">Search</Button>
      </Form>
    </SearchSection>
  );
}
