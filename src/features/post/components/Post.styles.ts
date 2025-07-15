import { Button, Card } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgb(73, 61, 82);
  padding: 16px;
`;
export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: rgb(3, 87, 57);
`;
export const CardInfo = styled(Card)`
  background-color: rgb(75, 0, 73);
  box-shadow: rgba(0, 0, 0, 0.9) 0px 5px 15px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgb(88, 56, 128);
`;

export const Title = styled.h3`
  background-color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const UserName = styled.p`
  font-size: 15px;
  color: #555555;
`;
export const Text = styled.p`
  font-size: 13px;
  color: rgb(15, 109, 62);
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #777777;
`;
export const PostActions = styled.div`
  display: flex;
  gap: 10px;
  background-color: rgb(57, 35, 92);
`;
export const InteractionButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  background-color: rgb(26, 21, 170);
`;
export const StyledButton = styled(Button)`
  background-color: rgb(86, 8, 98);
`;
