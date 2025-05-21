"use client";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 24, className }) => {
  return (
    <Loader2
      style={{ width: size, height: size }}
      className={`animate-spin text-primary ${className}`}
    />
  );
};

export default LoadingSpinner;
