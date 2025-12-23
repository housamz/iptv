import { AppButtonProps } from "../types";

export default function AppButton({ children, className = "", ...props }: AppButtonProps) {
  return (
    <button
      className={
        `bg-gradient-to-t from-sky-900 to-sky-500 text-white text-xs px-4 py-2 rounded-sm font-bold hover:to-sky-400 hover:from-sky-900 transition-colors duration-200 cursor-pointer ` +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
