import clsx from 'clsx';

import { List } from '@homework-task-components/List';
import { CreatePostForm } from '@homework-task-components/form/CreatePostForm';
import { DynamicLayout } from '../DynamicLayout';
import { dynamicLayoutData } from '@homework-task/utils/dynamicLayoutData';
import { Layout } from '../Layout';

export const Landing = () => {
    return (
        <section
            className={clsx(
                'bg-cream',
                'min-h-screen',
                'grid',
                'grid-cols-1',
                'lg:grid-cols-landing',
                'gap-16',
                'place-content-center',
                'p-8',
                'sm:p-16'
            )}
        >
            <img
                className={clsx(
                    'max-w-[600px]',
                    'lg:max-w-none',
                    'w-full',
                    'self-center',
                    'justify-self-center'
                )}
                src="/media/landing/hero.svg"
                alt=""
            />
            <List />
        </section>
    );
};
