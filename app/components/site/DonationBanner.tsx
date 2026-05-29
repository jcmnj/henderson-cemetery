import Link from "next/link";

export function DonationBanner() {
  return (
    <section className="section-reveal mx-auto mt-10 mb-6 w-full max-w-6xl px-4 sm:mb-8 sm:px-6">
      <div className="rounded-3xl border border-amber-700/35 bg-amber-100/75 p-4 shadow-sm sm:p-7">
        <p className="text-xs uppercase tracking-[0.22em] text-amber-800">
          Preservation Support
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
          Henderson Cemetery is maintained through volunteer care and donations.
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-stone-800 sm:text-base">
          Donations help support mowing, stone care, record preservation, and
          ongoing maintenance.
        </p>
        <p className="mt-4 text-sm leading-7 text-stone-800">
          Harmarville Cemetery Association
          <br />
          c/o David Campbell
          <br />
          505 Bicker Rd
          <br />
          Cabot, PA 16023
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="button-soft inline-flex w-full justify-center rounded-full border border-stone-500 bg-stone-900 px-5 py-3 text-sm font-medium text-stone-100 hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 sm:w-auto"
          >
            Donation and Contact Details
          </Link>
        </div>
      </div>
    </section>
  );
}
