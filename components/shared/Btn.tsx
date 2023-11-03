import { FC } from "react";
import { Button } from "../ui/button";

interface BtnProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Btn: FC<BtnProps> = ({
  label,
  type,
  variant,
  onClick,
  className,
  disabled,
}) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      type={type ? type : "button"}
      variant={variant ? variant : "default"}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default Btn;
