import Link from "next/link";
import type { Metadata } from "next";
import { DonationBanner } from "@/app/components/site/DonationBanner";
import { PlotMapViewer } from "@/app/components/plot-maps/PlotMapViewer";
import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { PageHeader } from "@/app/components/site/PageHeader";

export const metadata: Metadata = {
  title: "Plot Map Viewer",
  description:
    "Interactive viewing page for the Henderson Cemetery lot map in Harmarville (Acmetonia), Pennsylvania.",
  openGraph: {
    title: "Henderson Cemetery Plot Map Viewer",
    description: "Pan and review the cemetery lot map in a dedicated viewer.",
    url: "/plot-maps/viewer",
  },
  twitter: {
    title: "Henderson Cemetery Plot Map Viewer",
    description: "Pan and review the cemetery lot map in a dedicated viewer.",
  },
};

export default function PlotMapViewerPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="section-reveal mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Cemetery Layout"
          title="Plot Map Viewer"
          description="Explore the cemetery lot map in a large viewer. For best results, compare map references with burial records."
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/images/plot-map/henderson-cemetery-plots-medium.jpg"
            target="_blank"
            rel="noreferrer"
            className="button-soft inline-flex rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-100 hover:bg-stone-700"
          >
            Open full-size plot map
          </a>
          <Link
            href="/plot-maps"
            className="button-soft inline-flex rounded-full border border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200"
          >
            Return to Plot Maps
          </Link>
        </div>

        <div className="mt-8">
          <PlotMapViewer />
        </div>
      </section>

      <DonationBanner />

      <SiteFooter />
    </main>
  );
}
