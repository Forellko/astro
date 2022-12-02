import { useState } from 'preact/hooks';

export default function Visible() {
  const [count, setCount] = useState(0);

  return (
    <div className="border p-6">
      <div className="text-lg">{count}</div>
      <button
        className="border p-4 bg-green-500"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        className="border p-4 bg-red-500"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
