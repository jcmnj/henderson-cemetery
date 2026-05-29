import Link from "next/link";
import { formatHistoricalDate } from "@/app/lib/formatHistoricalDate";
import type { BurialRecord } from "./types";

type BurialRecordsTableProps = {
  records: BurialRecord[];
};

export function BurialRecordsTable({ records }: BurialRecordsTableProps) {
  return (
    <div className="hidden overflow-hidden rounded-3xl border border-stone-300 bg-stone-50/95 md:block">
      <div className="grid grid-cols-[1.05fr_1.05fr_0.85fr_0.85fr_0.5fr_0.6fr_1.7fr_0.7fr] border-b border-stone-200 bg-stone-100 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600">
        <span>Surname</span>
        <span>Given / Middle</span>
        <span>Birth</span>
        <span>Death</span>
        <span>Plan</span>
        <span>Plot</span>
        <span>Notes</span>
        <span>Stone Photo</span>
      </div>

      <div>
        {records.map((record) => (
          <div
            key={record.slug}
            className="grid grid-cols-[1.05fr_1.05fr_0.85fr_0.85fr_0.5fr_0.6fr_1.7fr_0.7fr] gap-3 border-b border-stone-200 px-5 py-4 text-sm text-stone-800 last:border-b-0"
          >
            <span>{record.surname || "—"}</span>
            <span>
              <Link
                href={`/burial-records/${record.slug}`}
                className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-600"
              >
                {record.givenMiddle || "—"}
              </Link>
            </span>
            <span>{formatHistoricalDate(record.birth) || "—"}</span>
            <span>{formatHistoricalDate(record.death) || "—"}</span>
            <span>{record.plan || "—"}</span>
            <span>{record.plot || "—"}</span>
            <span className="leading-6 text-stone-700 whitespace-pre-wrap">{record.comments || "—"}</span>
            <span>
              {record.image ? (
                <a
                  href={record.image}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
                >
                  View
                </a>
              ) : (
                "—"
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
