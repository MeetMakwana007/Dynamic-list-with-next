"use client";
import NumberInput from "@components/Input";
import MultiSelect from "@components/MultiSelect";
import { useState } from "react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

export default function Home() {
  const [totalPages, setTotalPages] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <NumberInput
        totalNumberOfPages={totalPages}
        setTotalNumberOfPages={setTotalPages}
      />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Multi-Select Menu</h1>
        <MultiSelect
          options={options}
          selectedValues={selectedValues}
          onChange={setSelectedValues}
        />
      </div>
    </main>
  );
}
