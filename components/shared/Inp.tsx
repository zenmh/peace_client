"use client";

import { FC } from "react";
import { Input } from "../ui/input";

interface InpProps {
  name: string;
  type: "text" | "email" | "password" | "number" | "file";
  placeholder: string;
  register?: any;
  errors?: any;
  error?: boolean;
  errorMessage?: string;
}

const Inp: FC<InpProps> = ({
  name,
  type,
  placeholder,
  register,
  errors,
  error,
  errorMessage,
}) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name as string, {
          required: errorMessage ? errorMessage : false,
        })}
      />
      {errors[name] && (
        <p className="text-red-600 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Inp;
