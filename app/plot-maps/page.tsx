import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import Link from "next/link";

export default function PlotMapsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Cemetery Layout
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Plot Maps
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">
          This section preserves recovered plot-plan references and layout notes
          for Henderson Cemetery, with structure for future interactive mapping.
        </p>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Recovered Plan References
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Legacy plot-map materials note a sequence of plan tracing and
            revisions: traced from SP on July 22, 1915; retraced in April 1974
            (F. Carson); revised in March 2000 (J. Stephenson); and revised
            again in June 2012 (J. B. Ebert).
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-stone-600">
            These references are preserved as historical map context and linked
            to the evolving burial roster and section records.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Map Reference Area
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
              Current Preservation View
            </h2>
            <p className="mt-3 text-base leading-7 text-stone-700">
              A unified map canvas from the legacy site is referenced but was
              not recovered with working source files. This preserved view marks
              the area while we prepare a modern interactive map layer.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-stone-300 bg-stone-100">
              <img
                src="/images/skyview-henderson-cemetery.jpg"
                alt="Aerial view of Henderson Cemetery grounds"
                className="h-[240px] w-full object-cover sm:h-[300px]"
              />
            </div>
          </article>

          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Future Interactive Structure
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
              <li>Plan-level overlays for Plan 1, Plan 2, and legacy sections</li>
              <li>Record-to-plot linking between roster entries and map locations</li>
              <li>Source notes for uncertain or conflicting plot references</li>
            </ul>

            <div className="mt-5 border-t border-stone-200 pt-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Archive Cross-Links
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/burial-records"
                  className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-stone-700"
                >
                  Burial Records
                </Link>
                <Link
                  href="/history"
                  className="rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-200"
                >
                  Cemetery History
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Preservation Note
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Historical map records and burial references were created across
            different periods and revisions. Plot positions and numbering may
            vary between sources. This page preserves available references while
            documenting an ongoing process of verification.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
