import { useLocomotiveScroll } from "react-locomotive-scroll";
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
	const { scroll } = useLocomotiveScroll();
	console.log(scroll);
	return <SContainer data-scroll-container>{children}</SContainer>;
};
