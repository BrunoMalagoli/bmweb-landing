import { memo } from "react";

interface SectionSeparatorProps {
  variant?: "gradient" | "wave" | "diagonal" | "dots";
  height?: "sm" | "md" | "lg";
  fromColor?: "primary" | "secondary" | "muted" | "accent";
  toColor?: "primary" | "secondary" | "muted" | "accent";
  reverse?: boolean;
  animated?: boolean;
}

export const SectionSeparator = memo(({
  variant = "gradient",
  height = "md",
  fromColor = "muted",
  toColor = "background",
  reverse = false,
  animated = true
}: SectionSeparatorProps) => {
  const heightClasses = {
    sm: "h-16 sm:h-20",
    md: "h-24 sm:h-32 md:h-40",
    lg: "h-32 sm:h-40 md:h-48"
  };

  const gradientClasses = {
    primary: "from-primary/12 to-primary/3",
    secondary: "from-secondary/12 to-secondary/3", 
    muted: "from-muted/20 to-muted/5",
    accent: "from-accent/15 to-accent/3",
    background: "from-background/80 to-background"
  };

  const getGradientClass = () => {
    const from = gradientClasses[fromColor];
    const to = gradientClasses[toColor];
    return reverse ? `${to} ${from}` : `${from} ${to}`;
  };

  if (variant === "wave") {
    return (
      <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id={`gradient-${fromColor}-${toColor}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-muted/30" stopColor="currentColor" />
              <stop offset="50%" className="text-muted/20" stopColor="currentColor" />
              <stop offset="100%" className="text-muted/10" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C300,80 600,0 1200,40 L1200,120 L0,120 Z"
            fill={`url(#gradient-${fromColor}-${toColor})`}
            className={animated ? "animate-pulse" : ""}
          />
        </svg>
        
        {/* Animated overlay */}
        {animated && (
          <div className={`absolute inset-0 bg-gradient-to-r ${getGradientClass()} opacity-60 animate-gradient-x`} />
        )}
      </div>
    );
  }

  if (variant === "diagonal") {
    return (
      <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()} transform -skew-y-1 origin-top-left ${animated ? "animate-gradient-xy" : ""}`}
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-tl from-background/20 to-transparent transform skew-y-1 origin-bottom-right ${animated ? "animate-pulse" : ""}`}
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`relative w-full ${heightClasses[height]} overflow-hidden bg-gradient-to-b ${getGradientClass()}`}>
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-current transform ${animated ? "animate-ping" : ""}`}
              style={{
                left: `${(i * 5 + Math.random() * 10)}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default gradient separator
  return (
    <div className={`relative w-full ${heightClasses[height]} ${animated ? "animate-gradient-y" : ""}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${getGradientClass()}`} />
      
      {/* Subtle overlay patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className={`h-full w-full bg-gradient-to-r from-transparent via-current/10 to-transparent ${animated ? "animate-pulse" : ""}`} />
      </div>
      
      {/* Optional animated particles */}
      {animated && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full opacity-40 animate-float"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.3}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
});

SectionSeparator.displayName = "SectionSeparator";