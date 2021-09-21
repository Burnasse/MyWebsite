import React from "react";
import clsx from "clsx";

const Button = ({ onClick, active, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx("p-2 m-5 rounded-lg shadow-lg hover:bg-blue-300", active ? "bg-gray-600 text-white " : "bg-gray-100 text-black ")}
    >
      {children}
    </button>
  );
};

export default Button;

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  children: React.ReactNode;
};
