import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const ContainerSmall = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const InputSmall = styled.input`
  width: 8rem;
  /* padding: 5px; */
  border-radius: 0.35rem;
  padding: 5px 0.2rem;
  border: 0.15rem solid black;
`;

export const InputMedium = styled.input`
  width: 18rem;
  /* padding: 5px; */
  border-radius: 0.35rem;
  padding: 5px 0.2rem;
  border: 0.15rem solid black;
`;

export const InputLarge = styled.input`
  width: 35rem;
  /* padding: 5px; */
  border-radius: 0.35rem;
  padding: 5px 0.2rem;
  border: 0.15rem solid black;
`;

export const InputMediumLarge = styled.input`
  width: 25rem;
  padding: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelHorizontal = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BoxButton = styled.div`
  width: 51.4rem;
  display: flex;
  justify-content: flex-end;
`;

export const Select = styled.select`
  width: 25rem;
  border-radius: 0.35rem;
  padding: 8px 0.2rem;
  border: 0.15rem solid black;
`;

export const Options = styled.option`
  width: 10rem;
  border-radius: 0.35rem;
  padding: 8px 0.2rem;
  border: 0.15rem solid black;
`;
