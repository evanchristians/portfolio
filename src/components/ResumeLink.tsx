import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";

const SResumeLinkContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0 auto;
    justify-content: center;

    ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
        justify-content: flex-start;
    }
`;

const SResumeLink = styled.a`
    /* border-radius: 6px; */
    overflow: hidden;
    z-index: 1;
    position: relative;
    display: inline-flex;
    align-items: center;
    line-height: 1;
    width: fit-content;
    padding: 1rem;
    text-decoration: none;
    opacity: 0;
    color: ${({ theme }: { theme: Theme }) => theme.colors.white};
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.white};
    cursor: pointer;
    transform: translateX(1.2rem);
    transition: opacity 1s,
        transform 1.4s
            ${({ theme }: { theme: Theme }) => theme.easings.outQuint},
        color 200ms ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
    &:last-of-type {
        transition-delay: 200ms;
        color: ${({ theme }: { theme: Theme }) => theme.colors.background};
        background: ${({ theme }: { theme: Theme }) => theme.colors.white};
        &:after {
            content: unset;
        }
        &:hover {
            color: ${({ theme }: { theme: Theme }) => theme.colors.background};
            .svg-inline--fa {
                transform: translateX(0.25rem);
            }
        }
    }

    &:after {
        z-index: -1;
        content: "";
        background: ${({ theme }: { theme: Theme }) => theme.colors.white};
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 700ms
            ${({ theme }: { theme: Theme }) => theme.easings.outExpo};
    }

    &:hover {
        color: ${({ theme }: { theme: Theme }) => theme.colors.background};
        &:after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }

    .svg-inline--fa {
        margin-left: 0.5rem;
        font-size: 12px;
        transition: transform 300ms
            ${({ theme }: { theme: Theme }) => theme.easings.outBack};
    }

    &.in {
        opacity: 1;
        transform: none;
    }

    ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
        margin: 0;
    }
`;

interface IResumeLink {}

export const ResumeLink: React.FC<IResumeLink> = () => {
    const [isInView, setIsInView] = useState(false);
    return (
        <Viewport
            onEnter={async () => {
                await sleep(800);
                setIsInView(true);
            }}
        >
            <SResumeLinkContainer>
                <SResumeLink
                    rel="noreferrer"
                    className={isInView ? "in" : undefined}
                    href="mailto:evanryk@gmail.com"
                >
                    say hi <FontAwesomeIcon icon={faEnvelope} />
                </SResumeLink>
                <SResumeLink
                    rel="noreferrer"
                    className={isInView ? "in" : undefined}
                    href="https://resume.evanchristians.co.za"
                    target="_blank"
                >
                    resume <FontAwesomeIcon icon={faArrowRight} />
                </SResumeLink>
            </SResumeLinkContainer>
        </Viewport>
    );
};
