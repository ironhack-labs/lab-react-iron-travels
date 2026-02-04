import styled from "styled-components";

const FiltersWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto 1.5rem auto;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  color: #181818;
  font-weight: 500;
`;

const Select = styled.select`
  border: 1px solid #e6e2d8;
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #faf9f6;
  margin-left: 0.5rem;
`;

export default function FiltersBar({ onChange }) {
  return (
    <FiltersWrapper>
      <FilterLabel>
        Sort by
        <Select onChange={e => onChange('sort', e.target.value)}>
          <option value="price">Price</option>
          <option value="duration">Duration</option>
          <option value="stops">Stops</option>
        </Select>
      </FilterLabel>
      <FilterLabel>
        Airline
        <Select onChange={e => onChange('airline', e.target.value)}>
          <option value="all">All</option>
          <option value="azul">Azul</option>
          <option value="latam">LATAM</option>
          <option value="gol">GOL</option>
        </Select>
      </FilterLabel>
      <FilterLabel>
        Stops
        <Select onChange={e => onChange('stops', e.target.value)}>
          <option value="all">All</option>
          <option value="direct">Direct</option>
          <option value="1stop">1 Stop</option>
        </Select>
      </FilterLabel>
    </FiltersWrapper>
  );
}
