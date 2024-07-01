import { useUserList } from '@homework-task/hooks/useUserList';
import clsx from 'clsx';

export const List = () => {
    const { userList } = useUserList();

    return (
        <ul
            className={clsx(
                'col-span-full',
                'grid',
                'gap-8',
                'grid-cols-1',
                'md:grid-cols-2',
                'xl:grid-cols-4'
            )}
        >
            {userList.map(({ id, name, username, email, phone }) => (
                <li
                    key={`${username}-${id}`}
                    className={clsx('bg-white', 'p-8', 'rounded-[8px]')}
                >
                    <h3 className={clsx('mb-4')}>
                        <strong>{name}</strong>
                    </h3>
                    <p>
                        <small>{username}</small>
                    </p>
                    <p>
                        <small>{email}</small>
                    </p>
                    <p>
                        <small>{phone}</small>
                    </p>
                </li>
            ))}
        </ul>
    );
};
