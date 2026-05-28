import { SiteFooter } from "@/app/components/site/SiteFooter";
import { SiteHeader } from "@/app/components/site/SiteHeader";
import Link from "next/link";

const timeline = [
  {
    period: "c. 1800-1828",
    title: "Early Burying Ground",
    body: "The cemetery was first known as the Denny-Henderson Cemetery, with land made available by the Denny and Henderson families for use as a public burying ground. Records suggest an approximate inception around 1800. The earliest named gravestone is Hannah Henderson (d. 1828), with earlier stones showing only initials such as J.P. (1807).",
  },
  {
    period: "Late 1800s",
    title: "Surveyed Family Lots and Name Change",
    body: "The Oliver Henderson family surveyed adjacent property into 54 burial lots, each with space for eight graves. As this section developed, the name shifted from Denny-Henderson Cemetery to Henderson Cemetery. A plan of lots laid out by Oliver P. Henderson was recorded in Allegheny County records on November 18, 1884 (noted in Plan Book Vol. VII, Page 114). This area is now referred to as Plan 1.",
  },
  {
    period: "1909",
    title: "Formation of the Harmarville Cemetery Association",
    body: "By 1909 the grounds had become overgrown. Rev. H. J. Rose called a meeting at the cemetery on May 31, 1909 to organize care and maintenance. A charter application followed in July, and the proposed corporate name became The Harmarville Cemetery Association. Early officers and directors included Rev. Harry J. Rose, Joseph Barton, Grace B. McRoberts, William S. Carson, William Nixon, James Smeaton, and Rev. John Henderson.",
  },
  {
    period: "1911 and After",
    title: "Expansion and Ongoing Stewardship",
    body: "In 1911, Anna Melzena Spring (heir to the Denny estate) donated adjoining land. One hundred additional lots were surveyed from this gift, later shown as Plan 2 on cemetery maps. Over subsequent decades, board leadership was reorganized multiple times as generations changed, including documented boards in 1952 and 1975, helping preserve the cemetery through continued local stewardship.",
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Historical Stewardship
        </p>
        <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          History
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-stone-700">
          Henderson Cemetery in Acmetonia (near Harmarville, Pennsylvania)
          reflects more than two centuries of local family history, community
          stewardship, and preservation work.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-stone-700">
          The narrative below is compiled from recovered association history and
          archived site materials, with light copy cleanup for clarity while
          preserving factual meaning.
        </p>

        <div className="mt-10 space-y-5">
          {timeline.map((item) => (
            <article
              key={`${item.period}-${item.title}`}
              className="rounded-3xl border border-stone-300 bg-stone-50/90 p-6 sm:p-8"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                {item.period}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-7 text-stone-700">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-stone-300 bg-stone-100/80 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Preservation Note
          </p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-stone-700">
            Legacy records indicate that many burials were never fully recorded,
            and some gravesite details changed across documents over time. The
            archive preserves these records as historical evidence while
            continuing to refine accuracy through careful review.
          </p>
          <Link
            href="/burial-records"
            className="mt-5 inline-flex rounded-full border border-stone-400 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-200"
          >
            Return to Burial Records
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
