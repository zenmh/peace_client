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
}

const Btn: FC<BtnProps> = ({ label, type, variant, onClick, className }) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      type={type ? type : "button"}
      variant={variant ? variant : "default"}
    >
      {label}
    </Button>
  );
};

export default Btn;
