import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  const [count2, setCount2] = useState(0);

  const onIncrease2 = () => {
    setCount2(count2 + 1);
  };
  const onDecrease2 = () => {
    setCount2(count2 - 1);
  };

  return (
    // 기본값이 0에서 시작하고, 1씩 증가하고 1씩 감소하는 count 상태
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  );
};

export default Counter;
