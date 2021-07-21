import React, { ChangeEvent, useCallback } from "react";
import clsx from "clsx";

interface TextFieldProps {
  value: string;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextField = ({
  value,
  className,
  placeholder,
  onChange,
}: TextFieldProps) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <div className={clsx(className, "flex w-full max-w-sm")}>
      <input
        className="flex-grow h-12 rounded-l-md bg-black text-white text-sm pl-5 outline-none"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button className="h-12 w-24 bg-white rounded-r-md title text-sm">
        Submit
      </button>
    </div>
  );
};

export default TextField;
