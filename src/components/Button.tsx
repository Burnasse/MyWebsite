import React from "react";

const Button = ({ onClick, children }: ButtonProps) => {

    return(
        <button onClick={onClick} className="m-5 p-2 bg-gray-100 shadow-lg rounded-lg text-black hover:bg-gray-300">
            {children}
        </button>
    )
}

export default Button;

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}