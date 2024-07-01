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
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch('https://jsonplaceholder.typicode.com/users', {
            signal: abortCont.signal,
        })
            .then((response) => {
                if (!response.ok) throw Error('Could not fetch the date for that resouce');
                return response.json();
            })
            .then((data) => {
                setUserList(data);
                setIsLoading(false);
                setError(null);
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.error('Fetch aborted');
                    return;
                }

                setError(err.message);
                setIsLoading(false);
            });

            return () => abortCont.abort();
    }, []);

    return { data: userList, isLoading, error };
};
