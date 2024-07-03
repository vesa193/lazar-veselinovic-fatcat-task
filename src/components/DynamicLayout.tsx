import componentRegistry from '@homework-task/utils/componentRegistry';
import clsx from 'clsx';

interface ComponentConfig {
    type: string;
    props: { [key: string]: any };
}

interface LayoutConfig {
    type: string;
    props: { [key: string]: any };
    components: ComponentConfig[];
}

interface DynamicLayoutProps {
    data: LayoutConfig[];
}

export const DynamicLayout: React.FC<DynamicLayoutProps> = ({ data }) => {
    return (
        <div>
            {data.map((layout, index) => {
                return (
                    <div
                        key={index}
                        className={clsx(layout.type, layout.props.className)}
                    >
                        {layout.components.map((component) => {
                            const Component = componentRegistry[component.type];
                            return Component ? (
                                <Component {...component.props} />
                            ) : null;
                        })}
                    </div>
                );
            })}
        </div>
    );
};
