import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 2.5rem auto 1.5rem auto;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  color: #181818;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const List = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 8px 0 #e6e2d8cc;
  padding: 1rem 1.2rem;
  min-width: 180px;
  font-size: 0.98rem;
  color: #181818;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function RecentSearches({ searches = [] }) {
  if (!searches.length) return null;
  return (
    <Wrapper>
      <Title>Recent searches</Title>
      <List>
        {searches.map((s, i) => (
          <Card key={i}>
            <div>{s.route}</div>
            <div style={{ color: '#a88c4a', fontWeight: 600 }}>{s.date}</div>
            <div style={{ fontSize: '0.93rem', color: '#444' }}>{s.passengers}</div>
          </Card>
        ))}
      </List>
    </Wrapper>
  );
}
