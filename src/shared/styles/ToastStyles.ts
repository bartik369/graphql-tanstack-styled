import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #333842 !important;
    color: white !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    box-shadow: rgba(14, 14, 16, 0.9) 0px 25px 20px -20px;
  }

  .Toastify__toast--success {
    background-color: rgb(34, 40, 54) !important;
  }

  .Toastify__toast--error {
    background-color: #dc3545 !important;
  }

  .Toastify__progress-bar {
    background: #00ff00 !important;
  }
  .Toastify__close-button--light {
    color: #ffffff;
  }
`;