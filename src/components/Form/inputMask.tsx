import InputMask from "react-input-mask";
import styled from "styled-components";

interface InputProps {
  mask: string;
  id: string;
  placeholder: string;
  onChange?: any
}

const MeuInputMask = styled(InputMask)`
  background-color: #fff !important;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  height: 2.25rem;
  width: 100%;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  color: #000;
  &:hover {
    /* background-color: #181b23 !important; */
    cursor: text
  };
  &::placeholder {
    color: #9ca3af; 
  };
`;

export function InputMasked({ mask, id, placeholder, onChange, ...rest }: InputProps) {
  return (
    <MeuInputMask
      mask={mask}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
      // onChange={(e) => setDocumentNumber(e.target.value)}
    />
  );
}
