import Link from "next/link";
import type { BurialRecord } from "./types";

type BurialRecordCardProps = {
  record: BurialRecord;
};

const fields: Array<{ key: keyof BurialRecord; label: string }> = [
  { key: "surname", label: "Surname" },
  { key: "givenMiddle", label: "Given / Middle" },
  { key: "birth", label: "Birth" },
  { key: "death", label: "Death" },
  { key: "plan", label: "Plan" },
  { key: "plot", label: "Plot" },
];

export function BurialRecordCard({ record }: BurialRecordCardProps) {
  const fullName = `${record.givenMiddle} ${record.surname}`.trim();

  return (
    <article className="rounded-2xl border border-stone-300 bg-stone-50/90 p-5">
      <Link
        href={`/burial-records/${record.slug}`}
        className="font-serif text-xl font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-600"
      >
        {fullName || "Unnamed Record"}
      </Link>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        {fields.map((field) => (
          <div key={field.key}>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              {field.label}
            </dt>
            <dd className="mt-1 text-sm text-stone-800">{record[field.key] || "—"}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 border-t border-stone-200 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
          Comments
        </p>
        <p className="mt-1 text-sm leading-6 text-stone-700 whitespace-pre-wrap">{record.comments || "—"}</p>
      </div>

      {record.image ? (
        <div className="mt-4 border-t border-stone-200 pt-4">
          <a
            href={record.image}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
          >
            View stone photo
          </a>
        </div>
      ) : null}
    </article>
  );
}
