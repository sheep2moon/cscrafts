import React from "react";

type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
    children: React.ReactNode;
};

const Checkbox = ({ checked, onChange, children }: CheckboxProps) => {
    return (
        <div>
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" checked={checked} onChange={onChange} />
                <span className="ml-2 text-gray-300">{children}</span>
            </label>
        </div>
    );
};

export default Checkbox;
