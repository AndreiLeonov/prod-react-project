import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface ISelectProps {
    className?:string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
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
        onChange?.(event.target.value);
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
});
