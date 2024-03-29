import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Theme } from "../types";

const SSocialIcons = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    position: fixed;
    top: 50%;
    right: 0.5rem;
    opacity: 0;
    transform: translateY(-50%) translateX(6rem) skewX(45deg);
    transition: all 1s ${({ theme }: { theme: Theme }) => theme.easings.outExpo}
        0.5s;

    ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
        right: 1rem;
        display: block;
    }

    &.in-view {
        transform: translateY(-50%);
        opacity: 1;
    }
`;

const SSocialIconLink = styled.a`
    font-size: 0;
    cursor: pointer;
    display: flex;
    position: relative;
    /* border-radius: 6px; */
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    overflow: hidden;
    text-decoration: none;
    transition: color 200ms
        ${({ theme }: { theme: Theme }) => theme.easings.outQuint};

    .svg-inline--fa {
        font-size: 16px;
    }

    &:before {
        z-index: -1;
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        background-color: ${({ theme }: { theme: Theme }) =>
            theme.colors.primary};
        transition: transform 400ms
                ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
            opacity 800ms
                ${({ theme }: { theme: Theme }) => theme.easings.outQuint} 300ms;
    }

    &:hover {
        color: ${({ theme }: { theme: Theme }) => theme.colors.background};
        transition-delay: 10ms;

        &:before {
            transform: none;
            transform-origin: right;
            opacity: 1;
            transition: transform 400ms
                    ${({ theme }: { theme: Theme }) => theme.easings.outExpo},
                opacity 0ms;
        }
    }
`;

interface ISocialIcons {
    inView?: boolean;
}

export const SocialIcons: React.FC<ISocialIcons> = ({ inView }) => {
    return (
        <SSocialIcons className={inView ? "in-view" : undefined}>
            <li>
                <SSocialIconLink
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/evanchristians/"
                    target="_blank"
                >
                    linkedin
                    <FontAwesomeIcon icon={faLinkedin} />
                </SSocialIconLink>
            </li>
            <li>
                <SSocialIconLink
                    rel="noreferrer"
                    href="https://github.com/evanchristians"
                    target="_blank"
                >
                    github
                    <FontAwesomeIcon icon={faGithub} />
                </SSocialIconLink>
            </li>
            <li>
                <SSocialIconLink
                    rel="noreferrer"
                    href="mailto:evanryk@gmail.com"
                    target="_blank"
                >
                    email
                    <FontAwesomeIcon icon={faAt} />
                </SSocialIconLink>
            </li>
        </SSocialIcons>
    );
};
