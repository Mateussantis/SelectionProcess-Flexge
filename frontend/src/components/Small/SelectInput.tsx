import { SelectHTMLAttributes } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 25rem;
  padding: 8px;
`;

const Options = styled.option`
  width: 10rem;
`;

// interface OptionsProps {
//     value: string,
//     label: string
// }

// interface OptionsListProps {
//     options: OptionsProps[],
// }

interface SelectProps extends SelectHTMLAttributes<HTMLElement> {
  options: Array<{
    value: string;
    label: string;
  }>;
}

export function SelectInput({ options, ...rest }: SelectProps) {
  return (
    <Select {...rest}>
      {options.map(({ value, label }) => (
        <Options value={value}>{label}</Options>
      ))}
    </Select>
  );
}
