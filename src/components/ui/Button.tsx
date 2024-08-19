import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#008E7F] text-white rounded py-2 px-4 font-poppins hover:bg-[#006F66]"
    >
      {children}
    </button>
  );
};
