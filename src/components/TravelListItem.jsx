import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 #e6e2d8cc;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 1rem;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
`;

const Desc = styled.p`
  font-size: 0.98rem;
  color: #444;
  margin: 0 0 0.5rem 0;
`;

const Price = styled.div`
  font-size: 1.1rem;
  color: #a88c4a;
  font-weight: 700;
`;

const Badge = styled.span`
  background: #f7e7b4;
  color: #a88c4a;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0.2rem 0.8rem;
  margin-right: 0.7rem;
`;

const Eco = styled.span`
  background: #e6f7ee;
  color: #1a7f5a;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 1rem;
  padding: 0.2rem 0.8rem;
  margin-right: 0.7rem;
`;

const FavBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${({ $fav }) => ($fav ? '#e6c97a' : '#bbb')};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #a88c4a;
  }
`;

export default function TravelListItem({ image, title, desc, price, badge, isEco, isFavorite, onToggleFavorite, onDelete, children }) {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Info>
        <div style={{marginBottom:8}}>
          {badge && <Badge>{badge}</Badge>}
          {isEco && <Eco>Eco</Eco>}
        </div>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Price>{price}</Price>
        {children}
        <button onClick={onDelete} style={{marginTop:'0.7rem',background:'#fff',border:'1px solid #e6c97a',borderRadius:'1rem',padding:'0.3rem 0.9rem',color:'#a88c4a',fontWeight:600,cursor:'pointer'}}>Delete</button>
      </Info>
      <FavBtn $fav={isFavorite} onClick={onToggleFavorite} title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
        {isFavorite ? '★' : '☆'}
      </FavBtn>
    </Card>
  );
}
