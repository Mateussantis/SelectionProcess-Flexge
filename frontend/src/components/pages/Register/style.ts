import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8ebf5;
`;

export const Form = styled.form`
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 6rem 0px;
  border: 0.2rem solid #003666;
`;

export const Label = styled.label`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.58rem 8rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #003666;
`;

export const Img = styled.img`
  width: 30%;
`;

export const TextInput = styled.h3`
  font-size: 1.5rem;
  color: #00aca4;
`;

export const Button = styled.button`
  width: 35%;
  background-color: #079988;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #079988;
  font-size: 1.5rem;
  color: white;

  font-weight: 600;
  color: #fff;
  cursor: pointer;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(2);
  }
  :focus {
    outline: none;
  }
`;

export const ButtonText = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  font-family: arial, sans-serif;
  color: #069;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-size: 1.25rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const BoxButtonLink = styled.div`
  width: 100%;
  display: flex;
`;
