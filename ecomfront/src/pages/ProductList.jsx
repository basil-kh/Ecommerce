import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
const Container = styled.div``;

const Title = styled.h1`
  margin: 18px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 18px;
  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
    maxWidth: "150px",
  })}
`;

const FilterText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-right: 18px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 18px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Type</Option>
            <Option>Tiny</Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Pot Color</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
            {/* <Option>Watering Frequency (asc)</Option>
            <Option>Watering Frequency (desc)</Option>*/}
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
