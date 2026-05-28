import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import { PageHeader } from "@/app/components/site/PageHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:py-20">
        <PageHeader
          eyebrow="Correspondence"
          title="Contact"
          description="This page will provide contact details for archival questions, corrections, and preservation collaboration."
        />

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-50/80 p-5 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Placeholder Content
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-700">
            Contact channels and submission guidance will be listed here in an
            upcoming content pass.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
