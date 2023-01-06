import {
  Email,
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 18px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 18px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 28px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 42%;
  height: 18%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CactiWorld</Logo>
        <Desc>
          Some of the more common groups of cacti include Cereus, Echinocactus,
          Espostoa, Ferocactus, Mammillaria, Notocactus, Opuntia, Parodia,
          Pilosocereus, and Rebutia. Make the most of your cactus houseplants by
          planting them in containers that accent the plants' rich colors,
          shapes, or textures.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5998">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="8a3ab9">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="00acee">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link style={{ textDecoration: "none" }} to={`/register`}>
              Home
            </Link>
          </ListItem>

          <Link style={{ textDecoration: "none" }} to={`/cart`}>
            <ListItem>Cart</ListItem>
          </Link>
          <ListItem>
            <Link style={{ textDecoration: "none" }} to={`/products/cactus`}>
              Cacti Plants
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: "none" }} to={`/products/succulent`}>
              Succulent Plants
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ textDecoration: "none" }} to={`/products/bamboo`}>
              Bamboo Plants
            </Link>
          </ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> 45 Low Street, London,
          W5 6ET
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} />
          +44 2085267355
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          contact@cactisales.com
        </ContactItem>
        <Payment src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" />
      </Right>
    </Container>
  );
};

export default Footer;
