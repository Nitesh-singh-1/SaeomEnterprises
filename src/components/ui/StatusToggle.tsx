"use client";

interface StatusSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

export const StatusSwitch = ({
  checked,
  onChange,
  label,
}: StatusSwitchProps) => {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer select-none"
      onClick={() => onChange(!checked)}
    >
      {/* Switch */}
      <div
        className={`relative w-10 h-6 rounded-full transition-colors duration-300
          ${checked ? "bg-blue-600" : "bg-gray-300"}
        `}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow-md
            transition-transform duration-300
            ${checked ? "translate-x-4" : "translate-x-0"}
          `}
        />
      </div>

      {/* Label */}
      {label && (
        <span className="text-sm font-medium text-gray-700">
          {label}
        </span>
      )}
    </div>
  );
};
