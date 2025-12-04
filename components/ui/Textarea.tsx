import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className={cn(
                "flex w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white",
                "ring-offset-black placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-soft-red focus-visible:ring-soft-red",
                className
            )}
            {...props}
        />
    );
});

Textarea.displayName = "Textarea";

export { Textarea };
