import React from "react";

const UseStateDemo1 = () => {
  const [count, setCount] = React.useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>USE STATE DEMO 1</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          increaseCount();
        }}
      >
        increase{" "}
      </button>
    </div>
  );
};

export default UseStateDemo1;
