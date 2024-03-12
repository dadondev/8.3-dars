import styled from "styled-components";
import Span from "./Span";
import SubTitle from "./SubTitle";
import React from "react";

interface Props {
  title?: string;
  text?: string;
  isLatest?: boolean;
}

interface Style {
  isLatest?: boolean;
}

const StyledCard = styled.div<Style>`
  width: 100%;

  @media (width>=1200px) {
    margin-right: ${(props) => {
      if (!props.isLatest) {
        return "0";
      } else {
        return "32px";
      }
    }};
    border-right: ${(props) => {
      if (props.isLatest) {
        return "1px solid #000000";
      } else {
        return "none";
      }
    }};
  }
`;

const Card: React.FC<Props> = ({ title, text, isLatest }) => {
  return (
    <StyledCard isLatest={isLatest}>
      <Span>{title}</Span>
      <SubTitle>{text}</SubTitle>
    </StyledCard>
  );
};

export default Card;
