"use client";

import { FC } from "react";
import { Textarea } from "../ui/textarea";
import { Controller } from "react-hook-form";

interface TextareaProps {
  name: string;
  control: any;
}

const Txtarea: FC<TextareaProps> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Textarea {...field} placeholder="Type Your Address" />
      )}
    />
  );
};

export default Txtarea;
