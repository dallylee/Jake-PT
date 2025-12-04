import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white overflow-hidden",
                "shadow-[0_25px_80px_-50px_rgba(0,0,0,0.9)] transition-transform duration-300 card-tilt",
                className
            )}
            {...props}
        >
            <div className="glow-ring" aria-hidden />
            <div className="shine-line" aria-hidden />
            <div className="relative z-10 space-y-2">{props.children}</div>
        </div>
    );
});

Card.displayName = "Card";

export { Card };
