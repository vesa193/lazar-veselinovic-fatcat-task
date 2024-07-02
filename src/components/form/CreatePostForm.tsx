import { FormGenerator } from '@homework-task-components/form/FormGenerator';
import { configApp } from '@homework-task/configApp';
import { useCreatePost } from '@homework-task/hooks/useCreatePost';
import React from 'react';
import { z } from 'zod';
import { TextField } from './TextField';

const postSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(configApp.TITLE_MAX_CHARS, 'Title is too long'),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(configApp.BODY_MAX_CHARS, 'Body is too long'),
});

export type FormData = z.infer<typeof postSchema>;

export const CreatePostForm: React.FC = () => {
    const createPostMutation = useCreatePost;

    return (
        <FormGenerator<FormData>
            validationSchema={postSchema}
            useMutation={createPostMutation}
            successMessage="Successfully created a post"
            renderForm={({ register, errors }) => (
                <>
                    <TextField
                        id="title"
                        elementType="input"
                        register={register}
                        label="Title"
                        helperText={errors.title && errors.title.message}
                    />
                    <TextField
                        id="body"
                        elementType="textarea"
                        register={register}
                        label="Body"
                        helperText={errors.body && errors.body.message}
                    />
                </>
            )}
        />
    );
};
