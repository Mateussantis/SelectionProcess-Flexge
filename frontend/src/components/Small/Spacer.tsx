import styled from "styled-components";

const Space = styled.div<dadosProps>`
  margin: ${({ vertical }) => vertical || "0"}px
    ${({ horizontal }) => horizontal || "0"}px;
`;

interface dadosProps {
  vertical?: string;
  horizontal?: string;
}

export function Spacer({ vertical, horizontal }: dadosProps) {
  return <Space vertical={vertical} horizontal={horizontal} />;
}
