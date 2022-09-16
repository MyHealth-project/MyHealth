import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HeaderContainer = styled(DefaultContainer)`
    background-color: var(--principal-color-01);
    height: 60px;
`;

export const HeaderContent = styled(DefaultContent)`
    justify-content: space-between;
    align-items: center;

    svg {
        width: 35px;
        height: 35px;

        @media (min-width: 800px) {
            display: none;
        }
    }

    h1 {
        display: flex;
        justify-content: center;
        position: absolute;
        width: calc(100% - 30px);
        font-size: var(--font-size-logo);
        font-weight: bold;

        @media (min-width: 1200px) {
            position: initial;
        }
    }

    span {
        color: var(--principal-color-02);
        font-weight: bold;
    }

    @media (min-width: 800px) {
        flex-direction: row-reverse;
    }
    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

export const ImageContainer = styled.div`
    display: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;

    @media (min-width: 800px) {
        display: flex;
    }
`;