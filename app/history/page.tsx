import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Historical Stewardship
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          History
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">
          This page will house the documented history of Henderson Cemetery,
          including local context, timeline details, and archival notes.
        </p>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/80 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Placeholder Content
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-700">
            Historical narrative modules, source references, and chronology
            entries will be added here in a future pass.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
