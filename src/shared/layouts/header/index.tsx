import Navigation from "./Navigation";
import * as S from './Header.styles';
import ThemeToggle from "@/shared/components/theme/ThemeToggle";

const Header = () => {
    return (
        <S.Header>
           <Navigation />
           <ThemeToggle />
        </S.Header>
    );
};

export default Header;