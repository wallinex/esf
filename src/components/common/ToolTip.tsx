import React from 'react';
import { CheckIcon } from 'lucide-react';

interface TooltipProps {
  text: string;
  position?: { top?: number; left?: number; right?: number; bottom?: number };
  showCheckmark?: boolean;
  accentColor?: string;
  className?: string;
  delay?: number; // Add delay prop
  small?: boolean; // Add small prop
}

const Tooltip: React.FC<TooltipProps> = ({ 
  text,
  position = {},
  showCheckmark = true,
  accentColor = "#216FFF",
  className = "",
  delay = 0, // Default delay to 0
  small = false // Default small to false
}) => {
  return (
    <div 
      className={`absolute flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full border border-gray-700 transform scale-0 transition-transform duration-300 ${className} ${small ? 'text-xs px-2 py-1' : 'text-sm px-4 py-2'}`}
      style={{
        ...position,
        boxShadow: 'rgba(0, 0, 0, 0.41) 0px 1px 30px 10px',
        animationDelay: `${delay}ms`,
        animationName: 'scaleIn',
        animationFillMode: 'forwards'
      }}
    >
      <h6 className="font-medium">{text}</h6>
      {showCheckmark && <CheckIcon color={accentColor} size={small ? 16 : 20} />}
    </div>
  );
};

export default Tooltip;