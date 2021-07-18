import React from "react";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "contained" | "outlined";
  className?: string;
}

const Button = ({
  variant = "contained",
  label,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        "w-48 lg:w-60 h-12 lg:h-16 font-semibold text-base lg:text-xl rounded-full",
        {
          "bg-yellow text-darkblue-dark": variant === "contained",
          "bg-transparent border-2 border-yellow text-yellow":
            variant === "outlined",
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
