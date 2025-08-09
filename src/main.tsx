import '@ant-design/v5-patch-for-react-19';
import App from './App.tsx'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LocalFallback from './shared/components/ui/error/LocalFallback.tsx';

// const redirectPath = sessionStorage.redirect;
// if (redirectPath) {
//   sessionStorage.removeItem("redirect");
//   window.history.replaceState(null, '', redirectPath);
// }


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter basename="/graphql-tanstack-styled"> */}
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ErrorBoundary FallbackComponent={LocalFallback} >
    <App />
    </ErrorBoundary>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
