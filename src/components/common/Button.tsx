import clsx from "clsx";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", children, ...props }, ref) => {
    return (
        <button
            className={clsx(
                "flex justify-center h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                { "bg-indigo-600": variant === "primary", "bg-none": variant === "outline" },
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});
Button.displayName = "Button";

export default Button;
