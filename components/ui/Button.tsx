import { ButtonHTMLAttributes, ElementType, ReactElement, cloneElement, forwardRef } from "react";
import { cn } from "@/lib/utils";

type SlotProps = { children: ReactElement; className?: string } & Record<string, unknown>;

const Slot = forwardRef<HTMLElement, SlotProps>(({ children, className, ...props }, ref) => {
    const child = children as ReactElement<{ className?: string }>;
    return cloneElement(child, {
        ...props,
        ref,
        className: cn(className, child.props?.className),
    });
});

Slot.displayName = "Slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp: ElementType = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-gradient-to-r from-orange-500 to-amber-400 text-black hover:brightness-110 shadow-lg shadow-orange-500/25": variant === "primary",
                        "bg-white/10 text-white hover:bg-white/20 border border-white/10": variant === "secondary",
                        "border border-orange-400 text-orange-300 hover:bg-orange-500/10": variant === "outline",
                        "hover:bg-white/5 text-white": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
