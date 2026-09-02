import { useState } from "react";

type tooltipButtonProps = {
  className?: string;
  hoverContent?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export const TooltipButton = ({
  className,
  hoverContent,
  onClick,
  children,
}: tooltipButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="tooltip">
      <button
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </button>
      {isHovered && <div className="tooltipHover">{hoverContent}</div>}
    </div>
  );
};
