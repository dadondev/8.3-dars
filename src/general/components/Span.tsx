import React from "react";
import styled from "styled-components";
import tablet from "../utils/tablet";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const StyledSpan = styled.span`
  opacity: 0.4987;
  color: #2c2c2c;
  text-align: center;
  margin-bottom: 7px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.458px;
  text-transform: uppercase;

  ${tablet} {
    margin-bottom: 13px;
    font-size: 1.3rem;
  }
`;

const Span: React.FC<Props> = ({ children, className }) => {
  return <StyledSpan className={className}>{children}</StyledSpan>;
};

export default Span;
