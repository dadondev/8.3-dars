import styled from "styled-components";
import Form from "./Form";

const StyledHeader = styled.header`
  position: relative;
  padding: 26px 24px 0;
  background: url("/bg-image.png") no-repeat;
  background-size: cover;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 3.2rem;
  text-align: center;
  font-weight: 500;
  line-height: 3rem; /* 93.75% */
  letter-spacing: -0.286px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Title>IP Address Tracker</Title>
      <Form />
    </StyledHeader>
  );
};

export default Header;
