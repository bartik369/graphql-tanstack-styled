import { Popconfirm } from "antd";
import type { PopconfirmProps } from "antd";
import { CustomConfirmStyles } from "./Confirm.styles";

export const CustomConfirm = (props: PopconfirmProps) => {
  return (
    <>
      <CustomConfirmStyles />
      <Popconfirm
        {...props}
        overlayClassName={`custom-confirm ${props.overlayClassName || ""}`}
      />
    </>
  );
};
