import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { PageHeader } from "@/app/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Plot Maps",
  description:
    "Plot map references and preserved cemetery plan notes for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Plot Maps",
    description:
      "Explore cemetery plan references and map context for Henderson Cemetery sections and burial locations.",
    url: "/plot-maps",
  },
  twitter: {
    title: "Henderson Cemetery Plot Maps",
    description:
      "Explore cemetery plan references and map context for Henderson Cemetery sections and burial locations.",
  },
};

export default function PlotMapsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Cemetery Layout"
          title="Plot Maps"
          description="This section preserves plot-plan references and layout notes for Henderson Cemetery."
        />

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Plan References
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Plot-map materials note a sequence of plan tracing and
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
          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Map Reference Area
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
              Current Preservation View
            </h2>
            <p className="mt-3 text-base leading-7 text-stone-700">
              This section presents an overview image of the cemetery grounds
              alongside documented plot-plan notes used for reference.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-stone-300 bg-stone-100">
              <img
                src="/images/skyview-henderson-cemetery.jpg"
                alt="Aerial view of Henderson Cemetery grounds"
                className="h-[220px] w-full object-cover sm:h-[300px]"
              />
            </div>
          </article>

          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Map Reference Notes
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-stone-700">
              <li>Plan-level references for Plan 1, Plan 2, and related sections</li>
              <li>Burial-record and plot associations used in cemetery records</li>
              <li>Notes for uncertain or conflicting plot references</li>
            </ul>

            <div className="mt-5 border-t border-stone-200 pt-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Archive Cross-Links
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link
                  href="/burial-records"
                  className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                >
                  Burial Records
                </Link>
                <Link
                  href="/history"
                  className="rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                >
                  Cemetery History
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-5 sm:p-7">
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
