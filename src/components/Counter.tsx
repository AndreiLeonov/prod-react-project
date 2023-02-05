import React from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const inc = () => {
        setCount((prev) => prev + 1)
    }

    const dec = () => {
        setCount((prev) => prev - 1)
    }
    return (
        <div>
            <h1 className={classes.test}>{count}</h1>
            <button className={classes.btn} onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
};

export default Counter