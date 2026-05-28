type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-4xl">
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-stone-500 sm:mb-4">
        {eyebrow}
      </p>
      <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-stone-700">{description}</p>
    </header>
  );
}
