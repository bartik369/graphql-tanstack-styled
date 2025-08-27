import { jsx as _jsx } from "react/jsx-runtime";
import { Empty } from 'antd';
import { MESSAGES } from '@/shared/constants/messages';
import * as S from './NoData.styles';
const NoData = () => {
    return (_jsx(S.WrapperInfo, { children: _jsx(Empty, { description: MESSAGES.noData, image: _jsx(S.StyledIcon, {}) }) }));
};
export default NoData;
