import styled from "styled-components";
import { InboxOutlined } from "@ant-design/icons";

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
  .ant-empty-description {
    color: rgb(41, 49, 65);
    font-size: 14px;
  }
`;
export const StyledIcon = styled(InboxOutlined)`
  font-size: 80px;
  color: #293141;
`;