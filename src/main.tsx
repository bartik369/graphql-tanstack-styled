import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,

// import '@ant-design/v5-patch-for-react-19';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom'
// import App from './App.tsx'
// import { QueryClientProvider } from '@tanstack/react-query';
// import { queryClient } from './lib/queryClient.ts';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <HashRouter>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//     </HashRouter>
//   </StrictMode>,
// )

)
