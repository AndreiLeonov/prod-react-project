import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface ISelectProps<T extends string>{
    className?:string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => options?.map((item) => (
        <option
            key={item.value}
            className={cls.option}
            value={item.value}
        >
            {item.content}
        </option>
    )), [options]);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    };

    const mods: Mods = {};

    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {
                label && (
                    <span className={cls.label}>
                        {label}
                    </span>
                )
            }
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
