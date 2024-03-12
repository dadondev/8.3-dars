import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  overflow: hidden;
  max-width: 100%;
  min-width: 100%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 300px 1fr;
  @media (width >= 1200px) {
    grid-template-rows: 280px 1fr;
  }
`;

const Container: React.FC<Props> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
