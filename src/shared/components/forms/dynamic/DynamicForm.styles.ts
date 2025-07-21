import { Button, Form, Input, Space } from "antd";
import { css } from "styled-components";
import styled from "styled-components";

export const InputBaseStyles = css`
  background-color: rgb(31, 37, 46);
  border: 1px solid rgb(49, 59, 74);
  padding: 12px;
  &:hover,
  &:active,
  &:focus {
    background-color: rgb(38, 45, 56);
    border: 1px solid rgb(26, 118, 255);
  }
  &.ant-input {
    background-color: transparent !important;
    color: rgb(222, 221, 221) !important;
  }
`;
export const CustomForm = styled(Form)`
  .ant-form-item-label > label {
    color: rgb(145, 153, 163);
    font-size: 13px;
  }
`;
export const CustomInput = styled(Input)`
  ${InputBaseStyles}
`;
export const CustomTextarea = styled(Input.TextArea)`
  ${InputBaseStyles}
`;
export const CustomSpace = styled(Space)`
display: flex;
justify-content: flex-end;
`
export const ResetButton = styled(Button)`
border: none;
background-color:rgb(38, 44, 58);
font-size: 12px;
color: rgb(243, 243, 243);
&:hover {
    background-color:rgb(41, 49, 64) !important;
    color: rgb(243, 243, 243)!important;;
}
`
export const SubmitButton = styled(Button)`
border: none;
background-color: #0067ff;
font-size: 12px;
color: rgb(243, 243, 243);
&:hover {
    background-color:rgb(26, 118, 255) !important;
    color: rgb(243, 243, 243) !important;
}
`
