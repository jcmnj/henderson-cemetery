export function BurialEmptyState() {
  return (
    <div className="rounded-2xl border border-stone-300 bg-stone-50/80 px-5 py-8 text-center sm:px-6">
      <p className="font-serif text-2xl font-semibold text-stone-800">No matching records</p>
      <p className="mt-3 text-sm leading-6 text-stone-600">
        Try a different surname, given name, date, plan, plot, or comment keyword.
      </p>
    </div>
  );
}
