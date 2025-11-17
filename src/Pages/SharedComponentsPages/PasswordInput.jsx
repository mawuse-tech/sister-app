import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
    value,
    onChange,
    label = "Password",
    error = null,
    clearError = () => { },
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

    return (
        <div className="w-full flex flex-col">
            <label className="text-base mb-1">{label}</label>

            <div className="relative w-full">
                <input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                        if (error) clearError();
                    }}
                    autoComplete="new-password"
                    className={`input border border-gray-200 w-full text-gray-700 bg-white pr-12 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 ${error ? "border-red-400" : ""}`}
                    style={{ WebkitTextSecurity: showPassword ? "none" : undefined, zIndex: 10 }} // keeps it above
                    {...rest}
                />

                <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none active:scale-90 transition z-20"
                >
                    {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
