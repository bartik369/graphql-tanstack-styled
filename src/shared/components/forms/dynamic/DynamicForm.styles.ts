import { Button, Form, Input, Space } from "antd";
import { css } from "styled-components";
import styled from "styled-components";

export const InputBaseStyles = css`
  background-color: var(--color-bg-form-input);
  border: 1px solid var(--color-form-border);
  padding: 12px;
  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-bg-form-input-hover);
    border: 1px solid var(--color-form-border-hover);
  }
  &.ant-input {
    background-color: transparent !important;
    color: var(--color-font-primary) !important;
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
background-color: var(--color-primary);
font-size: 12px;
color: rgb(243, 243, 243);
&:hover {
    background-color: var(--color-primary-hover) !important;
    color: rgb(243, 243, 243) !important;
}
`
