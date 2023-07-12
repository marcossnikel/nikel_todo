import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="text-gray100 rounded-lg p-4 hover:cursor-pointer hover:bg-blueLight bg-blueDark flex items-center gap-2 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-danger"
    >
      {children}
    </button>
  );
}
