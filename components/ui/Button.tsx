import { ButtonHTMLAttributes, ReactElement, cloneElement, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Slot = forwardRef<HTMLElement, { children: ReactElement; className?: string }>(
    ({ children, className, ...props }, ref) => {
        return cloneElement(
            children as ReactElement,
            {
                ...(props as Record<string, unknown>),
                ref,
                className: cn(className, (children as { props?: { className?: string } }).props?.className),
            } as any
        );
    }
);

Slot.displayName = "Slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = (asChild ? Slot : "button") as any;
        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-electric-blue text-white hover:bg-blue-700": variant === "primary",
                        "bg-white text-dark-grey hover:bg-gray-100 border border-gray-200": variant === "secondary",
                        "border border-electric-blue text-electric-blue hover:bg-blue-50": variant === "outline",
                        "hover:bg-gray-100 text-dark-grey": variant === "ghost",
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
