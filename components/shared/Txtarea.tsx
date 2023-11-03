"use client";

import { FC } from "react";
import { Textarea } from "../ui/textarea";
import { Controller } from "react-hook-form";

interface TextareaProps {
  name: string;
  control: any;
  rows: number;
  cols: number;
}

const Txtarea: FC<TextareaProps> = ({ name, control, rows, cols }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Textarea
          rows={rows}
          cols={cols}
          {...field}
          placeholder="Type Your Address"
        />
      )}
    />
  );
};

export default Txtarea;
