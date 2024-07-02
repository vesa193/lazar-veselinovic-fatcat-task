import { Landing } from '@homework-task-components/landing/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles.css';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
            </main>
        </QueryClientProvider>
    );
};

export default App;
