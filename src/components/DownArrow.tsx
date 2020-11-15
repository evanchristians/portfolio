import styled from "styled-components";

const SDownArrow = styled.i<IDownArrow>`
  font-size: 18px;
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  color: ${(props) =>
    (props as any).show ? props.theme.colors.white : "transparent"};
  transition: color 200ms;
`;

interface IDownArrow {
  show?: boolean;
}

export const DownArrow: React.FC<IDownArrow> = ({ show }) => {
  return <SDownArrow show={show} className="fas fa-arrow-down" />;
};
