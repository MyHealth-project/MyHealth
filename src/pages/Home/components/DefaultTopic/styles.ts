import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../../../styles/global";

interface IBackgroundContainerContainerProps {
    backgroundImage: string;
}

export const BackgroundContainer = styled.div`
    width: 100%;
    background-image: url(${({backgroundImage}: IBackgroundContainerContainerProps) => backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
`;

export const DefaultTopicContainer = styled(DefaultContainer)`
    z-index: 1;
    backdrop-filter: brightness(30%);
`;

export const DefaultTopicContent = styled(DefaultContent)`
    flex-direction: column;
    padding: 20px 0;

    h2 {
        margin-bottom: 15px;
        font-size: var(--font-size-mobile-title);
        color: var(--principal-color-02);
    }

    p {
        font-size: var(--font-size-mobile-text);
        font-weight: 200;
        line-height: 30px;
    }

    ul {
        list-style: disc;
        margin-left: 15px;
        color: var(--principal-color-02);
    }

    li {
        color: var(--principal-color-02);
        font-weight: 400;
    }
`;