import { Landing } from '@homework-task-components/landing/Landing';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles.css';
import { DynamicLayout } from './components/DynamicLayout';
import { dynamicLayoutData } from './utils/dynamicLayoutData';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <DynamicLayout data={dynamicLayoutData} />
            </main>
        </QueryClientProvider>
    );
};

export default App;
