import styled from "styled-components";
import { Theme } from "../types";

const SHeadingContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex: 1;
    color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    background: ${({ theme }: { theme: Theme }) => theme.colors.background};

    ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
        text-align: left;
    }
`;

interface IHeadingContainer {}

export const HeadingContainer: React.FC<IHeadingContainer> = ({ children }) => {
    return <SHeadingContainer>{children}</SHeadingContainer>;
};
