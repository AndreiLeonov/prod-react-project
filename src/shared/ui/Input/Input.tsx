import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes,
    memo,
} from 'react';
import cls from './Input.module.scss';

// забрать все атрибуты InputHTMLAttributes<HTMLInputElement кроме value, onChange
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
    className?:string;
    value?: string;
    onChange?: (value: string) => void
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )
            }
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
