import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledSubTitle = styled.h1`
  color: #2c2c2c;
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 3rem; /* 115.385% */
  letter-spacing: -0.232px;
`;

const SubTitle: React.FC<Props> = ({ children }) => {
  return <StyledSubTitle>{children}</StyledSubTitle>;
};

export default SubTitle;
