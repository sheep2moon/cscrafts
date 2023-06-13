import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, className, type, ...props }, ref) => {
    return (
        <div className="flex flex-col">
            <label className="text-start text-white/40">{label}</label>
            <input
                type={type}
                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ref={ref}
                {...props}
            />
        </div>
    );
});
Input.displayName = "Input";

export default Input;
