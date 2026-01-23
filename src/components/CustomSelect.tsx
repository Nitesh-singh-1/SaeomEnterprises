"use client";

import { useEffect, useRef, useState } from "react";

interface Option {
  value: number;
  label: string;
}

interface CustomSelectProps {
  value: number;
  options: Option[];
  placeholder?: string;
  onChange: (value: number) => void;
}

export default function CustomSelect({
  value,
  options,
  placeholder = "Select an option",
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find(o => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 bg-white
          focus:outline-none focus:ring-2 focus:ring-primary
          ${open ? "border-primary" : "border-gray-200"}
        `}
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected?.label || placeholder}
        </span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute left-0 top-full mt-2 w-full
            z-[9999]
            rounded-lg border bg-white shadow-lg
            max-h-56 overflow-y-auto no-scrollbar
          "
        >
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer text-sm
                hover:bg-blue-50
                ${option.value === value ? "bg-blue-100 font-medium" : ""}
              `}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
