import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const FieldError = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => {
        if (!children) return null;

        return (
            <p
                ref={ref}
                className={cn("text-sm font-medium text-soft-red mt-1", className)}
                {...props}
            >
                {children}
            </p>
        );
    }
);

FieldError.displayName = "FieldError";

export { FieldError };
