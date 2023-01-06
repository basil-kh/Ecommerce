import styled from "styled-components";

const Container = styled.div`
  height: 27px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Free shipping on all orders till the end of the month!
    </Container>
  );
};

export default Announcement;
