import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className = "", children }: SectionShellProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl scroll-mt-28 px-5 sm:scroll-mt-32 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}
