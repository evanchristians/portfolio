import styled from "styled-components";
import { Theme } from "../types";

const SContainer = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    background: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

interface IContainer {}

export const Container: React.FC<IContainer> = ({ children }) => {
    return <SContainer>{children}</SContainer>;
};
