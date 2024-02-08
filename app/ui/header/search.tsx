"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  // Read the URL query string
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    // Manipulate the query using URLSearchParam helper methods
    const params = new URLSearchParams(searchParams);

    // Set the query to the user input
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // Replace the URL with the updated query
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <label htmlFor="search"></label>
      <input
        className="search-input"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  );
}
