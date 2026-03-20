import { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionContainer({ id, className = "", children }: SectionContainerProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`.trim()}>
      {children}
    </section>
  );
}
