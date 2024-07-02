import { FormData } from '@homework-task/components/form/CreatePostForm';
import { ErrorResponse } from '@homework-task/components/form/FormGenerator';
import { UseMutationResult, useMutation } from 'react-query';

export const useCreatePost = (): UseMutationResult<
    Response,
    ErrorResponse,
    FormData,
    unknown
> => {
    return useMutation(async (data: FormData) => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        if (!response.ok) {
            return response.json().then((errorData) => {
                throw new Error(errorData.message);
            });
        }
        return response;
    });
};
