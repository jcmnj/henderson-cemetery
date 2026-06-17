import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { DonationBanner } from "@/app/components/site/DonationBanner";
import { GalleryHighlights } from "@/components/gallery/GalleryHighlights";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Henderson Cemetery preservation archive for Harmarville (Acmetonia), Pennsylvania, with burial records, historical context, plot maps, and stewardship resources.",
  openGraph: {
    title: "Henderson Cemetery Preservation Archive",
    description:
      "Explore burial records, history, documents, and plot-map references for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
    url: "/",
  },
  twitter: {
    title: "Henderson Cemetery Preservation Archive",
    description:
      "Explore burial records, history, documents, and plot-map references for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  },
};

const archiveLinks = [
  {
    title: "Burial Records",
    description: "Search known interments, surnames, dates, plots, and notes.",
    href: "/burial-records",
  },
  {
    title: "Plot Maps",
    description: "View cemetery plot references and historical map materials.",
    href: "/plot-maps",
  },
  {
    title: "History",
    description: "Read the documented history of Henderson Cemetery.",
    href: "/history",
  },
  {
    title: "Documents",
    description: "Access cemetery documents, records, and supporting files.",
    href: "/documents",
  },
  {
    title: "Photo Archive",
    description:
      "Browse historical photographs, cemetery views, monuments, and preservation images.",
    href: "/gallery",
  },
];

export default async function HomePage() {
  const galleryImages = await getGalleryImages();

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader sticky />

      <section className="section-reveal relative overflow-hidden border-b border-stone-300">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/gallery/hendersoncemetery1.jpg')] bg-cover bg-center opacity-25" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(245,241,234,0.68),rgba(245,241,234,0.94))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(87,83,78,0.18),transparent_35%)]" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-20">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-stone-600">
              Harmarville, Pennsylvania
            </p>

            <h1 className="max-w-3xl font-serif text-[2.35rem] font-semibold leading-[0.95] text-stone-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Preserving the history of Henderson Cemetery.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-700 sm:mt-8 sm:text-lg sm:leading-8">
              A respectful archive for cemetery history, burial records, plot
              maps, documents, and preservation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <Link
                href="/burial-records"
                className="button-soft rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-stone-700 sm:px-6"
              >
                Search Burial Records
              </Link>

              <Link
                href="/preservation"
                className="button-soft rounded-full border border-stone-400 px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-200 sm:px-6"
              >
                Support Preservation
              </Link>
            </div>
          </div>

          <div className="card-soft rounded-[2rem] border border-stone-300 bg-stone-50/70 p-5 shadow-sm sm:p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Archive Snapshot
            </p>

            <div className="mt-8 grid gap-4">
              <div className="border-b border-stone-200 pb-4">
                <p className="font-serif text-4xl font-semibold">1800s</p>
                <p className="mt-1 text-sm text-stone-600">
                  Early cemetery history and documented burials.
                </p>
                <Link
                  href="/history"
                  className="link-soft mt-3 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  View Historical Timeline
                </Link>
              </div>

              <div className="border-b border-stone-200 pb-4">
                <p className="font-serif text-4xl font-semibold">Records</p>
                <p className="mt-1 text-sm text-stone-600">
                  Surnames, dates, plot references, and notes.
                </p>
                <Link
                  href="/burial-records"
                  className="link-soft mt-3 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  Search Records
                </Link>
              </div>

              <div>
                <p className="font-serif text-4xl font-semibold">Maps</p>
                <p className="mt-1 text-sm text-stone-600">
                  Plot maps and cemetery layout references.
                </p>
                <Link
                  href="/plot-maps"
                  className="link-soft mt-3 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  Open Plot Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="history"
        className="section-reveal mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 md:gap-10 lg:grid-cols-2 lg:items-center lg:py-20"
      >
        <div className="space-y-6">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
              Historical Stewardship
            </p>

            <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              A living record of local families, service, and community care.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-soft rounded-2xl border border-stone-300 bg-stone-50/80 p-5">
              <p className="font-serif text-3xl font-semibold">1800s</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Start with the earliest documented burials, family names, and
                historical context from Henderson Cemetery&apos;s 19th-century
                records.
              </p>
              <Link
                href="/history"
                className="link-soft mt-4 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
              >
                Explore History
              </Link>
            </div>

            <div className="card-soft rounded-2xl border border-stone-300 bg-stone-50/80 p-5">
              <p className="font-serif text-3xl font-semibold">Archive</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Search burial records, follow plot references, and review
                documents and stewardship notes in one connected archive.
              </p>
              <Link
                href="/burial-records"
                className="link-soft mt-4 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
              >
                Open Records Archive
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div className="image-soft overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-200 shadow-sm">
            <img
              src="/images/henderson-cemetery-rock.jpg"
              alt="Henderson Cemetery stone marker"
              className="h-[280px] w-full object-cover sm:h-[330px] lg:h-[390px]"
            />
          </div>

          <div className="space-y-4 text-base leading-7 text-stone-700">
            <p>
              Henderson Cemetery contains generations of local history and
              family records. This archive makes that history easier to read,
              search, preserve, and share.
            </p>

            <p>
              This work protects and organizes existing records so families,
              researchers, and visitors can find cemetery information more
              clearly.
            </p>
          </div>
        </div>
      </section>

      <GalleryHighlights images={galleryImages} totalCount={galleryImages.length} />

      <section
        id="records"
        className="section-reveal relative overflow-hidden border-y border-stone-300 bg-stone-200/40"
      >
        <div className="absolute inset-0 bg-[url('/images/skyview-henderson-cemetery.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-[#f5f1ea]/80" />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
                Burial Records
              </p>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
                A clearer way to search the cemetery archive.
              </h2>
            </div>

            <p className="text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              Search names, dates, plots, and notes, with tombstone photographs
              where available. The archive is intended to support descendants,
              researchers, and local families.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-50/95 shadow-xl shadow-stone-400/10 sm:mt-10">
            <form
              action="/burial-records"
              method="get"
              className="bg-white/70 p-4 sm:p-6"
            >
              <p className="mb-3 text-sm text-stone-600">
                Search by surname, given name, date, plan, plot, or notes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  name="q"
                  placeholder="Search by surname, given name, plot, or note..."
                  className="w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm outline-none transition focus:border-stone-600 focus:ring-2 focus:ring-stone-200"
                />
                <button
                  type="submit"
                className="button-soft rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-stone-700 sm:shrink-0"
                >
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/burial-records"
                  className="link-soft text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  View all burial records
                </Link>
              </div>
            </form>

            <div className="grid gap-3 border-t border-stone-200 bg-stone-100/70 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
              <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Burial Records</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">1,223+</p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Stone Photographs</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">655</p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-stone-500">Cemetery History</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">200+ Years</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <Link
              href="/burial-records"
              className="link-soft text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
            >
              Browse full burial list
            </Link>
          </div>
        </div>
      </section>

      <section id="documents" className="section-reveal mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            Archive Access
          </p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
            Key resources, organized clearly.
          </h2>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-5">
          {archiveLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="card-soft flex h-full flex-col rounded-[1.5rem] border border-stone-300 bg-stone-50 p-6 shadow-sm"
            >
              <h3 className="font-serif text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="support" className="section-reveal border-t border-stone-300 bg-stone-200/55 text-stone-900">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-10 lg:py-20">
          <div className="space-y-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-600">
              Preservation Support
            </p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Help maintain the cemetery and preserve its records.
            </h2>

            <div className="rounded-[1.5rem] border border-stone-300 bg-stone-50/90 p-6">
              <p className="text-base leading-7 text-stone-700">
                Donations and volunteer support help maintain the grounds,
                preserve records, and protect the cemetery’s historical value for
                future generations.
              </p>

              <Link
                href="/contact"
                className="button-soft mt-6 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 hover:bg-stone-700"
              >
                Donation Information
              </Link>
            </div>
          </div>

          <div>
            <div className="rounded-[1.5rem] border border-stone-300 bg-stone-50/90 p-6">
              <p className="text-base uppercase tracking-[0.16em] text-stone-600">
                Preservation Intake
              </p>
              <p className="mt-3 text-base leading-7 text-stone-700">
                Share a correction, family note, or burial detail for review by
                the archive team.
              </p>

              <form className="mt-5 grid gap-3">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-base text-stone-900 placeholder:text-stone-500 outline-none focus:border-stone-600"
                />
                <input
                  name="contact"
                  placeholder="Email or Phone"
                  className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-base text-stone-900 placeholder:text-stone-500 outline-none focus:border-stone-600"
                />
                <textarea
                  name="note"
                  rows={4}
                  placeholder="Record details, family context, or source notes"
                  className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-base text-stone-900 placeholder:text-stone-500 outline-none focus:border-stone-600"
                />
                <Link
                  href="/contact"
                  className="button-soft mt-1 inline-flex w-fit rounded-full border border-stone-400 px-5 py-2.5 text-base font-medium text-stone-800 hover:bg-stone-200"
                >
                  Continue to Contact
                </Link>
              </form>
              <p className="mt-5 border-t border-stone-200 pt-5 text-base leading-7 text-stone-700">
                Henderson Cemetery Preservation Archive
                <br />
                Harmarville, Pennsylvania
                <br />
                Records and genealogy inquiries are welcome through the contact
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DonationBanner />

      <SiteFooter />
    </main>
  );
}
