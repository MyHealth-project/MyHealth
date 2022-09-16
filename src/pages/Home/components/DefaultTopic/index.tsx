import { ReactNode } from "react";
import { BackgroundContainer, DefaultTopicContainer, DefaultTopicContent } from "./styles";

interface IDefaultTopicProps {
    children: ReactNode;
    backgroundImage: string;
}

const DefaultTopic = ({ children, backgroundImage }: IDefaultTopicProps) => {
    return (
        <BackgroundContainer backgroundImage={backgroundImage}>
            <DefaultTopicContainer>
                <DefaultTopicContent>
                    {children}
                </DefaultTopicContent>
            </DefaultTopicContainer>
        </BackgroundContainer>
    );
}

export default DefaultTopic;