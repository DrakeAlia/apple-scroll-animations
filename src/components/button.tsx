"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export const Button = ({ children, size = "medium" }: Props) => {
  const sizeClassNames = {
    // 12px
    small: "text-xs px-2 py-1",
    // 14px
    medium: "text-sm px-3 py-1",
    // 17px
    large: "text-lg px-4 py-2",
  };

  return (
    <button
      className={twMerge(
        "text-textBlack bg-white rounded-full",
        sizeClassNames[size]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
