"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/burial-records", label: "Burial Records" },
  { href: "/plot-maps", label: "Plot Maps" },
  { href: "/documents", label: "Documents" },
  { href: "/gallery", label: "Gallery" },
  { href: "/research", label: "Research" },
  { href: "/preservation", label: "Preservation" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://www.facebook.com/profile.php?id=100057152182753",
    label: "Facebook",
    external: true,
  },
];

type SiteHeaderProps = {
  sticky?: boolean;
};

export function SiteHeader({ sticky = false }: SiteHeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={[
        "border-b border-stone-300 bg-[#f5f1ea]/95",
        sticky ? "sticky top-0 z-50 backdrop-blur" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <Link href="/" className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
              Henderson Cemetery
            </p>
            <p className="truncate font-serif text-xl font-semibold text-stone-900 sm:text-2xl">
              Preservation Archive
            </p>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-soft rounded-full px-2.5 py-1.5 text-[13px] text-stone-700 transition hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={[
                    "link-soft rounded-full px-2.5 py-1.5 text-[13px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500",
                    isActive(link.href)
                      ? "bg-stone-900 text-stone-100"
                      : "text-stone-700 hover:bg-stone-200",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <nav className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-3 lg:hidden">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-soft shrink-0 rounded-full border border-stone-300 bg-stone-50 px-3 py-2 text-sm text-stone-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={[
                  "link-soft shrink-0 rounded-full px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500",
                  isActive(link.href)
                    ? "bg-stone-900 text-stone-100"
                    : "border border-stone-300 bg-stone-50 text-stone-700",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
