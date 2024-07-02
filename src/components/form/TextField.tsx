import clsx from 'clsx';

type ElementType = 'input' | 'textarea';

type TextFieldProps = {
    elementType: ElementType;
    helperText?: string;
    register: any;
    id: string;
    label: string;
};

const inputWrapperStyle = clsx('flex', 'flex-col', 'gap-2');

export const TextField: React.FC<TextFieldProps> = ({
    elementType,
    helperText,
    register,
    id,
    label,
}) => {
    if (elementType === 'textarea') {
        return (
            <div className={inputWrapperStyle}>
                <label htmlFor={id}>{label}</label>
                <textarea
                    id={id}
                    {...register(id)}
                    className={clsx('rounded-sm', 'p-3')}
                />
                {helperText && <small className={clsx('text-red')}>{helperText}</small>}
            </div>
        );
    }

    return (
        <div className={clsx('flex', 'flex-col', 'gap-2')}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...register(id)}
                className={clsx('rounded-sm', 'p-3', helperText && 'outline-red-100')}
            />
            {helperText && <small className={clsx('text-red')}>{helperText}</small>}
        </div>
    );
};
