import React from "react";
import { InputProps } from "../types/types";
export default function LabeledInput({
  label,
  onInputChange,
  placeholder,
  required,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor="first_title"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="text"
        id="first_title"
        onChange={(e) => onInputChange(e.target.value)}
        className="block w-full p-4 sm:text-md border rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
