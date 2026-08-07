import { ShieldCheck } from "lucide-react";

interface SectionBadgeProps {
  title: string;
}

export default function SectionBadge({
  title,
}: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
      <ShieldCheck
        size={18}
        className="text-blue-600"
      />

      <span className="text-sm font-medium text-blue-700">
        {title}
      </span>
    </div>
  );
}