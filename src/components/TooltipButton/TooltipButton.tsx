import type { ReactNode } from "react";
import "./TooltipButton.css";

type TooltipButtonProps = {
  className?: string;
  label: string;
  onClick?: () => void;
  children: ReactNode;
};

export const TooltipButton = ({
  className,
  label,
  onClick,
  children,
}: TooltipButtonProps) => (
  <span className="tooltip">
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
    <span className="tooltipHover" role="tooltip">
      {label}
    </span>
  </span>
);
