import React from "react";
import Header from "../header";
import Footer from "../footer";
import { ErrorBoundary } from "react-error-boundary";
import LocalFallback from "@/shared/components/ui/error/LocalFallback";
import * as S from "./PageLayout.styles";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.CustomMain>
        <ErrorBoundary FallbackComponent={LocalFallback}>
          {children}
        </ErrorBoundary>
      </S.CustomMain>
      <Footer />
    </S.Wrapper>
  );
};

export default PageLayout;
