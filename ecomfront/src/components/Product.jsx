import {
  FavoriteBorderTwoTone,
  SearchTwoTone,
  ShoppingCartTwoTone,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 4px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3f8e6;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

/*const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;*/

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #ece8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #bacaba;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartTwoTone />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchTwoTone />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderTwoTone />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
