import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-shadow"
    />
  );
});

Input.displayName = "Input";

export default Input;
