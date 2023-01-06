import { SendRounded } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fff6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 65px;
  margin: 18px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 18px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ebe5e5;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgreen;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: #5a865a;
  color: White;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Weekly updates on our latest arrivals and the most on trend cacti on the
        market.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendRounded />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
