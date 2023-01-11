import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter((v) => v + 1);
        }}
      >
        点击 {counter}
      </button>
    </div>
  );
}
