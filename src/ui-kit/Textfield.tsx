import React from "react";
import { TextfieldProps } from "../types/types";

function Textfield({
  id,
  label,
  onTextfieldChange,
  placeholder,
  required,
}: TextfieldProps) {
  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        onChange={(e) => onTextfieldChange(e.target.value)}
        className="block p-2.5 w-full text-sm border rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
}

export default Textfield;
