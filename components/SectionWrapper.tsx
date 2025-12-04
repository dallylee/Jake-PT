import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
    as?: "section" | "div" | "main";
}

const SectionWrapper = ({ className, as: Component = "section", children, ...props }: SectionWrapperProps) => {
    return (
        <Component
            className={cn(
                "relative w-full py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto",
                "overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-3xl",
                "shadow-[0_30px_120px_-60px_rgba(0,0,0,0.9)]",
                className
            )}
            {...props}
        >
            <div className="glow-ring" aria-hidden />
            <div className="shine-line" aria-hidden />
            <div className="relative z-10">{children}</div>
        </Component>
    );
};

export { SectionWrapper };
