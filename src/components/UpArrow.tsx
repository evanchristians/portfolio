import styled from "styled-components";

const SUpArrow = styled.i<IUpArrow>`
  font-size: 18px;
  position: fixed;
  left: 1rem;
  top: 1rem;
  color: ${(props) =>
    (props as any).show ? props.theme.colors.white : "transparent"};
  transition: color 200ms;
`;

interface IUpArrow {
  show?: boolean;
}

export const UpArrow: React.FC<IUpArrow> = ({ show }) => {
  return <SUpArrow show={show} className="fas fa-arrow-up" />;
};
