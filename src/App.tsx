import './index.css'
import { ValidationPage } from './validation/useCases/validate/ValidationPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <ValidationPage />
        </QueryClientProvider>
  )
}

export default App
