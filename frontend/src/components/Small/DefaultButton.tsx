import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

const Button = styled.button`
  width: 10rem;
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

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function DefaultButton({ text, ...attributs }: DefaultButtonProps) {
  return <Button {...attributs}>{text}</Button>;
}
