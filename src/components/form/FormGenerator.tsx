import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React from 'react';
import {
    FieldErrors,
    FieldValues,
    SubmitHandler,
    UseFormRegister,
    useForm,
} from 'react-hook-form';
import { UseMutationResult } from 'react-query';
import { ZodSchema } from 'zod';

export type ErrorResponse = {
    message: string;
};

type FormGeneratorProps<T extends FieldValues> = {
    validationSchema: ZodSchema<T>;
    useMutation: () => UseMutationResult<any, unknown, T, unknown>;
    renderForm: (formProps: {
        register: UseFormRegister<T>;
        errors: FieldErrors<T>;
    }) => React.ReactNode;
    successMessage?: string;
};

export const FormGenerator = <T extends FieldValues>({
    validationSchema,
    useMutation,
    renderForm,
    successMessage,
}: FormGeneratorProps<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation();

    const onSubmit: SubmitHandler<T> = (data) => {
        mutation.mutate(data, {
            onSuccess: () => {
                reset();
                if (successMessage) alert(successMessage);
            },
            onError: (error: any) => {
                alert('An error occurred: ' + error.message);
            },
        });
    };

    return (
        <form
            className={clsx('grid', 'gap-4')}
            onSubmit={handleSubmit(onSubmit)}
        >
            {renderForm({ register, errors })}
            <button
                type="submit"
                className={clsx(
                    'bg-black',
                    'text-white',
                    'rounded-sm',
                    'p-4',
                    'disabled:opacity-50',
                    'disabled:cursor-not-allowed'
                )}
                disabled={Object.keys(errors).length > 0}
            >
                Submit
            </button>
            {mutation.isLoading && <p>Loading...</p>}
            {mutation.isError && (
                <p>Error: {(mutation.error as ErrorResponse).message}</p>
            )}
            {!Object.keys(errors).length && mutation.isSuccess && <p className={clsx('text-emerald-500')}>Form submitted successfully!</p>}
        </form>
    );
};
