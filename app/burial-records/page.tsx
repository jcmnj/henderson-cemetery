import Link from "next/link";
import { BurialSearch } from "@/app/components/burial-records/BurialSearch";
import type { BurialRecord } from "@/app/components/burial-records/types";
import burialRecords from "@/app/data/burial-records.json";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/burial-records", label: "Burial Records" },
  { href: "/plot-maps", label: "Plot Maps" },
  { href: "/documents", label: "Documents" },
  { href: "/preservation", label: "Preservation" },
  { href: "/contact", label: "Contact" },
];

export default function BurialRecordsPage() {
  const records = burialRecords as BurialRecord[];

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <header className="border-b border-stone-300 bg-[#f5f1ea]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
          <p className="font-serif text-2xl font-semibold">Preservation Archive</p>
          <nav className="hidden gap-6 text-sm text-stone-700 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

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

        <BurialSearch records={records} />
      </section>
    </main>
  );
}
