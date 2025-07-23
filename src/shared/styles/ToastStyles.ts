import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: var(--color-bg-toast) !important;
    color: var(--color-font-toast) !important;
    border-radius: 8px !important;
    font-size: 14px !important;
    box-shadow: var(--color-box-shadow-toast);
    @media (max-width: 480px) {
    width: 250px;
  }
  }

  .Toastify__toast--success {
    background-color: var(--color-bg-toast) !important;
  }

  .Toastify__toast--error {
    background-color: #dc3545 !important;
  }

  .Toastify__progress-bar {
    background: var(--color-progress-success) !important;
  }
  .Toastify__close-button--light {
    color: #ffffff;
  }
  .Toastify__toast--success .Toastify__toast-icon svg {
    color: var(--color-progress-success) !important; /* или конкретный цвет */
    fill: var(--color-progress-success) !important;
  }

  /* Иконка для ошибки */
  .Toastify__toast--error .Toastify__toast-icon svg {
    color: var(--color-delete) !important;
    fill: var(--color-delete) !important;
  }
`;