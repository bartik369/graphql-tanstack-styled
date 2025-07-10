import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: 40px auto;
  padding: 30px;
  background-color:rgb(241, 241, 241);
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px,
    rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.04) 0px 6px 6px -3px,
    rgba(14, 63, 126, 0.04) 0px 12px 12px -6px,
    rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
`;
export const Header = styled.h1`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`;
export const InputGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const AddButton = styled(Button)`
padding: 0 11px !important;
height: 40px !important;
 color: #ffffff;
 background-color:rgb(29, 145, 104);
 border:none !important;
  &:hover {
    color: #ffffff !important;
    background-color:rgb(25, 202, 105) !important;
    border:none !important;
  }
`
export const TodoText = styled.span<{ $completed: boolean }>`
  flex: 1;
  justify-content: space-between;
  color: ${({ $completed }) => ($completed ? "#999999" : "#222222")};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;
export const ButtonsGroup = styled.div`
display: flex;
justify-content:flex-end;
gap: 10px;
margin-top: 24px;
margin-bottom: 24px;
`
export const ActiveButton = styled.button<{$active?: boolean}> `
background-color: ${({$active}) => ($active ? '#999999' : '#222222')};
`
