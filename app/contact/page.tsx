import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/app/components/site/PageHeader";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { DonationBanner } from "@/app/components/site/DonationBanner";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and donation information for the Harmarville Cemetery Association and Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Contact",
    description:
      "View contact, donation, directions, and association context for Henderson Cemetery preservation inquiries.",
    url: "/contact",
  },
  twitter: {
    title: "Henderson Cemetery Contact",
    description:
      "View contact, donation, directions, and association context for Henderson Cemetery preservation inquiries.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Correspondence"
          title="Contact"
          description="The Harmarville Cemetery Association is identified as the managing body for Henderson Cemetery."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Association Context
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Historical records list Henderson Cemetery at 750 Gulf
              Lab Road, Harmarville (Acmetonia), Pennsylvania, and states that
              the Harmarville Cemetery Association manages the cemetery.
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Source context from archived records notes that management and
              maintenance have relied on community support.
            </p>
          </article>

          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Contact and Donations
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Contact listing:
              <br />
              Email: <a className="underline decoration-stone-400 underline-offset-4" href="mailto:TamsenErcole@gmail.com">TamsenErcole@gmail.com</a>
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Donation mailing details:
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
              Historical records state that checks were payable to
              &ldquo;Harmarville Cemetery Association.&rdquo;
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Directions and Location Links
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              GPS coordinates listed in historical records:
              <br />
              Latitude: 40.54480
              <br />
              Longitude: -79.82320
            </p>
            <a
              href="https://goo.gl/maps/PLBYS9jWf5YGbgAp6"
              target="_blank"
              rel="noreferrer"
              className="button-soft mt-4 inline-flex rounded-full border border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              Open Directions
            </a>
          </article>

          <article className="card-soft rounded-3xl border border-stone-300 bg-stone-50/90 p-5 sm:p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Facebook and Archive Links
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              The Henderson Cemetery Facebook page provides additional community
              updates.
            </p>
            <a
              href="https://www.facebook.com/pages/Henderson-Cemetery/219590198058870"
              target="_blank"
              rel="noreferrer"
              className="link-soft mt-4 inline-flex text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
            >
              Visit Facebook Page
            </a>

            <div className="mt-5 border-t border-stone-200 pt-5 flex flex-wrap gap-3">
              <Link
                href="/history"
                className="button-soft rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-200"
              >
                History
              </Link>
              <Link
                href="/burial-records"
                className="button-soft rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-stone-700"
              >
                Burial Records
              </Link>
            </div>
          </article>
        </div>
      </section>

      <DonationBanner />

      <SiteFooter />
    </main>
  );
}
