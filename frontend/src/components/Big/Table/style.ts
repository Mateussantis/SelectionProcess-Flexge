import styled from "styled-components";

export const BigBox = styled.div`
  width: 99%;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TitleBox = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export const InputBigBox = styled.form`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  border-radius: 0.35rem;
  padding: 0px 0.2rem;
  border: 0.15rem solid black;
`;

export const FirstBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SecondBox = styled.div``;

export const Button = styled.button`
  padding: 0.4rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: black;
  background: white;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  -webkit-box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.15);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
  text-align: center;
  overflow: hidden;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.3rem;
`;

export const Tr = styled.tr`
  padding: 3rem;
`;

export const Th = styled.th`
  text-align: left;
  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: white;
  padding: 0.5rem;
  border: 1px solid black;
`;

export const Td = styled.td`
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.darkGreen};
  padding: 1rem;
`;

export const TdActions = styled.td`
  text-align: left;
  border: 1px solid;
  width: 5rem;
  padding: 0.5rem;
`;

export const ThActions = styled.th`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  text-align: left;
  border: 1px solid;
  padding: 1rem;
  width: 10rem;
  color: white;
  border: 1px solid black;
`;

export const ButtonActions = styled.button`
  border: 0px solid;
  margin-right: 1rem;
  margin-left: 0.8rem;
  background: white;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
