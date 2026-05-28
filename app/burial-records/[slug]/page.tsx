import Link from "next/link";
import { notFound } from "next/navigation";
import type { BurialRecord } from "@/app/components/burial-records/types";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import burialRecords from "@/app/data/burial-records.json";

type BurialRecordPageProps = {
  params: Promise<{ slug: string }>;
};

const records = burialRecords as BurialRecord[];

export function generateStaticParams() {
  return records.map((record) => ({ slug: record.slug }));
}

export default async function BurialRecordDetailPage({ params }: BurialRecordPageProps) {
  const { slug } = await params;
  const record = records.find((item) => item.slug === slug);

  if (!record) {
    notFound();
  }

  const fullName = `${record.givenMiddle} ${record.surname}`.trim();

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <Link
          href="/burial-records"
          className="text-xs uppercase tracking-[0.18em] text-stone-600 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
        >
          Back to Burial Records
        </Link>

        <h1 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {fullName || "Unnamed Record"}
        </h1>

        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone-500">
          Henderson Cemetery Archive Record
        </p>

        <div className="mt-7 rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:mt-8 sm:p-8">
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Surname</dt>
              <dd className="mt-1 text-base text-stone-800">{record.surname || "—"}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Given / Middle</dt>
              <dd className="mt-1 text-base text-stone-800">{record.givenMiddle || "—"}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Birth</dt>
              <dd className="mt-1 text-base text-stone-800">{record.birth || "—"}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Death</dt>
              <dd className="mt-1 text-base text-stone-800">{record.death || "—"}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Plan</dt>
              <dd className="mt-1 text-base text-stone-800">{record.plan || "—"}</dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Plot</dt>
              <dd className="mt-1 text-base text-stone-800">{record.plot || "—"}</dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-stone-200 pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Comments</p>
            <p className="mt-2 max-w-3xl whitespace-pre-wrap text-base leading-7 text-stone-700">
              {record.comments || "—"}
            </p>
          </div>

          {record.image ? (
            <div className="mt-6 border-t border-stone-200 pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                Tombstone Image
              </p>
              <a
                href={record.image}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block overflow-hidden rounded-2xl border border-stone-300 bg-stone-100"
              >
                <img
                  src={record.image}
                  alt={`Tombstone for ${fullName || "archival record"}`}
                  className="h-[220px] w-full object-cover sm:h-[320px]"
                />
              </a>
            </div>
          ) : null}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
