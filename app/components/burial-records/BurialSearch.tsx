"use client";

import { useMemo, useState } from "react";
import { BurialEmptyState } from "./BurialEmptyState";
import { BurialRecordCard } from "./BurialRecordCard";
import { BurialRecordsTable } from "./BurialRecordsTable";
import type { BurialRecord } from "./types";

type BurialSearchProps = {
  records: BurialRecord[];
  initialQuery?: string;
};

export function BurialSearch({ records, initialQuery = "" }: BurialSearchProps) {
  const [query, setQuery] = useState(initialQuery);

  const filteredRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return records;
    }

    return records.filter((record) => {
      const searchableText = [
        record.surname,
        record.givenMiddle,
        record.birth,
        record.death,
        record.plan,
        record.plot,
        record.comments,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query, records]);

  return (
    <div className="mt-8 sm:mt-10">
      <div className="rounded-3xl border border-stone-300 bg-stone-50/90 p-4 sm:p-5">
        <label
          htmlFor="burial-search"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-600"
        >
          Search Records
        </label>
        <input
          id="burial-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Surname, given name, birth, death, plan, plot, or comments"
          className="mt-2 w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-600 focus:ring-2 focus:ring-stone-200"
        />

        <p className="mt-3 text-sm text-stone-600">
          {filteredRecords.length.toLocaleString()} of {records.length.toLocaleString()} records
        </p>
      </div>

      <div className="mt-6 md:hidden">
        {filteredRecords.length === 0 ? (
          <BurialEmptyState />
        ) : (
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <BurialRecordCard key={record.slug} record={record} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 hidden md:block">
        {filteredRecords.length === 0 ? <BurialEmptyState /> : <BurialRecordsTable records={filteredRecords} />}
      </div>
    </div>
  );
}
