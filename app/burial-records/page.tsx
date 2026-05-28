import { BurialSearch } from "@/app/components/burial-records/BurialSearch";
import type { BurialRecord } from "@/app/components/burial-records/types";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import burialRecords from "@/app/data/burial-records.json";

type BurialRecordsPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function BurialRecordsPage({ searchParams }: BurialRecordsPageProps) {
  const records = burialRecords as BurialRecord[];
  const resolvedSearchParams = await searchParams;
  const initialQuery = resolvedSearchParams?.q ?? "";

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Cemetery Archive
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Burial Records
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">
          Search recovered legacy records by surname, given name, dates, plan,
          plot, and historical comments.
        </p>

        <BurialSearch records={records} initialQuery={initialQuery} />
      </section>

      <SiteFooter />
    </main>
  );
}
