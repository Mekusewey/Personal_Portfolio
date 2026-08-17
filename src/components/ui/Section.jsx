import { cn } from "../../utils/cn";

export default function Section({ id, className, children, title, subtitle }) {
  return (
    <section id={id} className={cn("py-24 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">{title}</h2>}
            {subtitle && <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}