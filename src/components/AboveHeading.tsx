import React, { useEffect, useState } from "react";
import { Viewport } from "react-is-in-viewport";
import styled from "styled-components";
import { sleep } from "../lib/sleep";
import { Theme } from "../types";

const SHeading = styled.h3<any>`
    margin-top: 0;
    display: inline-flex;
    align-items: flex-start;
    font-size: clamp(26px, 1.5vw, 36px);
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.headings};
    font-weight: 800;
    position: relative;
    white-space: nowrap;
    color: ${(props) =>
        !props.isInView
            ? "transparent"
            : props.theme.colors.primaryTransparent};
    transition: color 0ms 200ms;

    &:after {
        content: "";
        width: 105%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 600ms
            ${({ theme }: { theme: Theme }) => theme.easings.outQuint};
    }
    &.in::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    ${({ theme }: { theme: Theme }) => theme.sizes.sm} {
        margin-left: 4px;
    }
`;

interface IAboveHeading {}

export const AboveHeading: React.FC<IAboveHeading> = () => {
    const [isInView, setIsInView] = useState(false);
    const [animateHeading, setAnimateHeading] = useState(false);

    useEffect(() => {
        let sleep = setTimeout(() => {
            setAnimateHeading(false);
        }, 400);
        if (!animateHeading)
            return () => {
                clearTimeout(sleep);
            };
    }, [animateHeading]);
    return (
        <Viewport
            type="overlap"
            onEnter={async () => {
                await sleep(500);
                setIsInView(true);
                setAnimateHeading(true);
            }}
        >
            <SHeading
                isInView={isInView}
                className={animateHeading ? "in" : undefined}
            >
                Hi, I'm
            </SHeading>
        </Viewport>
    );
};
