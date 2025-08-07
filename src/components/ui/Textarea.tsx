import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-shadow"
        rows={4}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
