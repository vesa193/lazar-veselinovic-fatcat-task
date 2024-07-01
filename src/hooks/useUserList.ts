import { useEffect, useState } from 'react';

type TUser = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export const useUserList = () => {
    const [userList, setUserList] = useState<TUser[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUserList(data);
            });
    }, []);

    return { userList };
};
