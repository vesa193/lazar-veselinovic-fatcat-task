import { DynamicLayout } from '@homework-task-components/DynamicLayout';
import { Landing } from '@homework-task-components/landing/Landing';
import { dynamicLayoutData } from '@homework-task-utils/dynamicLayoutData';
import { QueryClient, QueryClientProvider } from 'react-query';
import './styles.css';

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
