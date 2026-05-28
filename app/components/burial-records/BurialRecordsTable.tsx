import type { BurialRecord } from "./types";

type BurialRecordsTableProps = {
  records: BurialRecord[];
};

export function BurialRecordsTable({ records }: BurialRecordsTableProps) {
  return (
    <div className="hidden overflow-hidden rounded-3xl border border-stone-300 bg-stone-50/95 md:block">
      <div className="grid grid-cols-[1.1fr_1.1fr_0.9fr_0.9fr_0.5fr_0.6fr_1.8fr] border-b border-stone-200 bg-stone-100 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600">
        <span>Surname</span>
        <span>Given / Middle</span>
        <span>Birth</span>
        <span>Death</span>
        <span>Plan</span>
        <span>Plot</span>
        <span>Comments</span>
      </div>

      <div>
        {records.map((record, index) => (
          <div
            key={`${record.surname}-${record.givenMiddle}-${record.birth}-${record.death}-${index}`}
            className="grid grid-cols-[1.1fr_1.1fr_0.9fr_0.9fr_0.5fr_0.6fr_1.8fr] gap-3 border-b border-stone-200 px-5 py-4 text-sm text-stone-800 last:border-b-0"
          >
            <span>{record.surname || "—"}</span>
            <span>{record.givenMiddle || "—"}</span>
            <span>{record.birth || "—"}</span>
            <span>{record.death || "—"}</span>
            <span>{record.plan || "—"}</span>
            <span>{record.plot || "—"}</span>
            <span className="leading-6 text-stone-700 whitespace-pre-wrap">{record.comments || "—"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
