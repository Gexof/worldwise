import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
    >
      <ArrowLeft size={16} />
      Back
    </button>
  );
}

export default BackButton;
