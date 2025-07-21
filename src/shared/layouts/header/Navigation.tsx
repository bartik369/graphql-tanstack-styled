import { NAVIGATION_ROUTES } from '@/shared/config/navigation';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as S from './Navigation.styles';

const Navigation = () => {
    const items = NAVIGATION_ROUTES.map(({ path, label }) => ({
        key: path,
        label: <Link to={path}>{label}</Link>
    }));
    const { pathname } = useLocation();
    return (
        <S.CustomMenu
          mode='horizontal'
          selectedKeys={[pathname]}
          items={items}
        />
    );
};

export default Navigation;