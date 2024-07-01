import clsx from 'clsx';

type layoutProps = {
    children: import('react').ReactNode;
    background: string;
};

export const Layout: React.FC<layoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
