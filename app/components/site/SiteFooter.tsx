import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 px-5 py-8 text-stone-300 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p>Henderson Cemetery · Harmarville, Pennsylvania</p>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <p>Historical Preservation Archive</p>
          <p className="text-xs text-stone-400">
            Digital preservation by{" "}
            <Link
              href="https://www.jcmnj.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-stone-600 underline-offset-4 hover:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
            >
              JCMNJ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
