"use client";
import * as React from "react";

import { cn } from "@/libs/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const iconClassName = cn("text-foreground", {
      "text-foreground/60 cursor-not-allowed": props.disabled,
    });
    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className={cn(
            "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-sky-400",
            className
          )}
          ref={ref}
          {...props}
        />

        {type === "password" && (
          <button
            title="Password Visibility"
            type="button"
            disabled={props.disabled}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeIcon className={iconClassName} />
            ) : (
              <EyeOffIcon className={iconClassName} />
            )}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
