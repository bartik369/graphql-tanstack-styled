import { Empty } from 'antd';
import { MESSAGES } from '@/shared/constants/messages';
import * as S from './NoData.styles';

const NoData = () => {
    return (
    <S.WrapperInfo>
        <Empty description={MESSAGES.noData} image={<S.StyledIcon />} />
      </S.WrapperInfo>
    );
};

export default NoData;