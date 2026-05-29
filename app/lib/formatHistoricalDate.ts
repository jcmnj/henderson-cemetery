const MONTHS: Record<string, string> = {
  jan: "January",
  january: "January",
  feb: "February",
  february: "February",
  mar: "March",
  march: "March",
  apr: "April",
  april: "April",
  may: "May",
  jun: "June",
  june: "June",
  jul: "July",
  july: "July",
  aug: "August",
  august: "August",
  sep: "September",
  sept: "September",
  september: "September",
  oct: "October",
  october: "October",
  nov: "November",
  november: "November",
  dec: "December",
  december: "December",
};

export function formatHistoricalDate(value: string | undefined | null): string {
  if (!value) return "";

  const input = value.trim();
  if (!input || input === "—") {
    return "";
  }

  if (/^\d{4}$/.test(input)) {
    return input;
  }

  const monthYearMatch = input.match(/^([A-Za-z]{3,9})\.?\s+(\d{4})$/);
  if (monthYearMatch) {
    const month = MONTHS[monthYearMatch[1].toLowerCase()];
    if (month) {
      return `${month} ${monthYearMatch[2]}`;
    }
  }

  const fullDateMatch = input.match(/^([A-Za-z]{3,9})\.?\s+(\d{1,2}),?\s+(\d{4})$/);
  if (fullDateMatch) {
    const month = MONTHS[fullDateMatch[1].toLowerCase()];
    if (month) {
      return `${month} ${Number(fullDateMatch[2])}, ${fullDateMatch[3]}`;
    }
  }

  return input;
}
