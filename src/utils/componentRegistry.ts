import { Hero } from '@homework-task-components/Hero';
import { ItemsShowcase } from '@homework-task-components/ItemsShowcase';
import { TrustBar } from '@homework-task-components/TrustBar';
import { Cards } from '@homework-task/components/Cards';

type ComponentProps = {
    [key: string]: React.FC<any>;
};

const componentRegistry: ComponentProps = {
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
    componentCards: Cards,
};

export default componentRegistry;
