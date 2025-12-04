import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    error?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, error, children, ...props }, ref) => {
    return (
        <select
            ref={ref}
            className={cn(
                "flex h-11 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white",
                "ring-offset-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
                error && "border-soft-red focus-visible:ring-soft-red",
                className
            )}
            {...props}
        >
            {children}
        </select>
    );
});

Select.displayName = "Select";

export { Select };
