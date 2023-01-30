import React from 'react';
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count - 1);
    };

    const dicrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={dicrement}>dicrement</button>
            {count}
        </div>
    );
};
