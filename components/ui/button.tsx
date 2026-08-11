import { cn } from "./cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#556B2F]/40";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-[#556B2F]/40 bg-[#556B2F]/15 text-[#dce7b4] shadow-[0_0_32px_-18px_rgba(85,107,47,0.8)] hover:border-[#556B2F]/70 hover:bg-[#556B2F]/25",
  secondary:
    "border border-slate-700/80 bg-slate-900/80 text-slate-100 hover:border-slate-500 hover:bg-slate-800/90",
  ghost: "bg-transparent text-slate-300 hover:bg-slate-800/80 hover:text-white",
};

export function Button({
  className,
  variant = "secondary",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variants[variant], fullWidth && "w-full", className)}
      {...props}
    />
  );
}
