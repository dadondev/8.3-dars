import { useState } from "react";
import styled from "styled-components";
import tablet from "../../general/utils/tablet";
import { useDispatch } from "react-redux";
import appSlice from "../../store/appSlice";

const StyledForm = styled.form`
  width: 100%;
  margin-top: 29px;
  position: relative;
  display: flex;
  margin-inline: auto;
  max-height: 58px;
  gap: 0;
  & > input {
    width: 100%;
    flex-grow: 1;
    padding: 18px 24px 19px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    color: #2c2c2c;
    font-size: 1.8rem;
    outline: none;
    border: none;
  }
  & > input:focus {
    outline: none;
  }
  & > input::placeholder {
    color: #2c2c2c;
    font-size: 1.8rem;
    opacity: 0.5;
  }
  & > button {
    width: 58px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms all;
    border: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: black;
    cursor: pointer;
  }

  ${tablet} {
    max-width: 555px;
    max-height: 58px;
    & > button:hover {
      background-color: rgba(63, 63, 63, 1);
    }
  }
`;
let keys = "qwertyuiopasdfghjklzxcvbnm".split("");

const Form = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(appSlice.actions.getLoad());
    getData();
  };
  const getData = async () => {
    let response;
    if (text.split("").find((e) => keys.includes(e))) {
      const req = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_QpYIcYMKP9k0THUi1ALUyEhx7Pa4g&domain=${text}`
      );

      const res = await req.json();
      response = res;
    } else {
      const req = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_QpYIcYMKP9k0THUi1ALUyEhx7Pa4g&ipAddress=${text}`
      );

      const res = await req.json();
      response = res;
    }
    if (!response.code) {
      dispatch(appSlice.actions.getData(response));
    } else {
      dispatch(appSlice.actions.getError());
    }
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for any IP address or domain"
      />
      <button type="submit">
        <img src="/next.svg" alt="icon" />
      </button>
    </StyledForm>
  );
};

export default Form;
