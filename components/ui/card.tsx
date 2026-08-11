import { cn } from "./cn";
import { glass } from "./design-tokens";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
};

export function Card({ children, className, padded = true }: CardProps) {
  return (
    <section className={cn(glass.card, padded ? "p-4 sm:p-6" : "", "overflow-hidden", className)}>
      {children}
    </section>
  );
}
