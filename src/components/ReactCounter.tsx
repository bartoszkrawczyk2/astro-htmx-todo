import { useState, type ReactNode, type PropsWithChildren } from "react";

type Props = {
  label: ReactNode;
};

export const ReactCounter = ({ label, children }: PropsWithChildren<Props>) => {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-4 border-2 border-blue-500 rounded p-2">
      <p>{label}</p>
      <button
        className="border-2 rounded px-2 border-slate-800"
        onClick={() => setCount((c) => c + 1)}
      >
        Count: {count}
      </button>

      {children}
    </div>
  );
};
