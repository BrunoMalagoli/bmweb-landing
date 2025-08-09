import { memo } from "react";

interface LoadingFallbackProps {
  height?: string;
  className?: string;
}

export const LoadingFallback = memo(({ height = "h-96", className = "" }: LoadingFallbackProps) => (
  <div 
    className={`${height} bg-gradient-to-r from-muted/10 via-muted/20 to-muted/10 animate-pulse contain-paint ${className}`}
    role="status"
    aria-label="Loading content"
  >
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  </div>
));

LoadingFallback.displayName = "LoadingFallback";