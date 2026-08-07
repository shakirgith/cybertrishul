import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  title: string;
}

export default function PrimaryButton({
  title,
}: PrimaryButtonProps) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700">
      {title}

      <ArrowRight
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}