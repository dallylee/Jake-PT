import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
    as?: "section" | "div" | "main";
}

const SectionWrapper = ({ className, as: Component = "section", children, ...props }: SectionWrapperProps) => {
    return (
        <Component className={cn("w-full py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto", className)} {...props}>
            {children}
        </Component>
    );
};

export { SectionWrapper };
