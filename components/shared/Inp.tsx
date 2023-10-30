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
    <>
      <Input type={type} placeholder={placeholder} />
    </>
  );
};

export default Inp;
