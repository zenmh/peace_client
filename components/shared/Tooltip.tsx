import { FC, ReactNode, ReactElement } from "react";
import {
  Tooltip as ShadcnToolTip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps {
  children: ReactNode | ReactElement;
  hoverText: string;
  className?: string;
  onClick?: () => void;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  hoverText,
  className,
  onClick,
}) => {
  return (
    <TooltipProvider>
      <ShadcnToolTip>
        <TooltipTrigger onClick={onClick} className={`block ${className}`}>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{hoverText}</p>
        </TooltipContent>
      </ShadcnToolTip>
    </TooltipProvider>
  );
};

export default Tooltip;
