"use client";
import NumberInput from "@components/NumberInput";
import MultiSelect from "@components/MultiSelect";
import { useMemo, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [totalPages, setTotalPages] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const options = useMemo(() => {
    return Array.from({ length: +totalPages }, (_, i) => ({
      value: `page${i + 1}`,
      label: `Page ${i + 1}`,
    }));
  }, [totalPages]);
  return (
    <main className="flex flex-col gap-10 items-center justify-between p-24">
      <NumberInput
        totalNumberOfPages={totalPages}
        setTotalNumberOfPages={setTotalPages}
        error={error}
        setError={setError}
      />
      <MultiSelect
        options={options}
        selectedValues={selectedValues}
        onClear={() => {
          setSelectedValues([]);
          setTotalPages("");
          setError("");
        }}
        onChange={setSelectedValues}
      />
    </main>
  );
}
