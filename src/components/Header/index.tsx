import { HeaderContainer, HeaderContent, ImageContainer } from "./styles";
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <AiOutlineMenu />
                <h1>My<span>Health</span></h1>
                <ImageContainer />
            </HeaderContent>
        </HeaderContainer>
    );
}

export default Header;