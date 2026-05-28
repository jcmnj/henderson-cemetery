import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/app/components/site/PageHeader";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and donation source information for the Harmarville Cemetery Association and Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Contact",
    description:
      "View recovered contact, donation, directions, and association context for Henderson Cemetery preservation inquiries.",
    url: "/contact",
  },
  twitter: {
    title: "Henderson Cemetery Contact",
    description:
      "View recovered contact, donation, directions, and association context for Henderson Cemetery preservation inquiries.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Correspondence"
          title="Contact"
          description="Recovered association materials identify the Harmarville Cemetery Association as the managing body for Henderson Cemetery."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Association Context
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Historical source information lists Henderson Cemetery at 750 Gulf
              Lab Road, Harmarville (Acmetonia), Pennsylvania, and states that
              the Harmarville Cemetery Association manages the cemetery.
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Source context from archived records notes that management and
              maintenance have relied on community support.
            </p>
          </article>

          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Contact and Donations (Recovered Source)
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Archived contact listing:
              <br />
              Email: <a className="underline decoration-stone-400 underline-offset-4" href="mailto:TamsenErcole@gmail.com">TamsenErcole@gmail.com</a>
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Archived donation mailing details:
              <br />
              Harmarville Cemetery Association
              <br />
              c/o David Campbell
              <br />
              505 Bicker Rd
              <br />
              Cabot, PA 16023
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Historical site text says checks were payable to “Harmarville
              Cemetery Association.” Earlier archive pages also show variant
              wording and a variant spelling of the treasurer surname; this page
              follows the contact details shown in the recovered About Us source.
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Directions and Location Links
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Recovered map references include GPS context noted in archived
              materials:
              <br />
              Latitude: 40.54480
              <br />
              Longitude: -79.82320
            </p>
            <a
              href="https://goo.gl/maps/PLBYS9jWf5YGbgAp6"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Open Directions
            </a>
          </article>

          <article className="rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Facebook and Archive Links
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Archived pages reference the Henderson Cemetery Facebook page for
              updates and community visibility.
            </p>
            <a
              href="https://www.facebook.com/pages/Henderson-Cemetery/219590198058870"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
            >
              Visit Facebook Page
            </a>

            <div className="mt-5 border-t border-stone-200 pt-5 flex flex-wrap gap-3">
              <Link
                href="/history"
                className="rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-200"
              >
                History
              </Link>
              <Link
                href="/burial-records"
                className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-stone-700"
              >
                Burial Records
              </Link>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
