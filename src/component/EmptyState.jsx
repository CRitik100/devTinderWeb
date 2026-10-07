import { Link } from "react-router";

const EmptyState = (onWidenFilters) => {
  return (
    <div className="flex h-[calc(100dvh-4rem)] items-center justify-center px-4">
      <div className="flex h-5/6 w-full max-w-md flex-col gap-6 overflow-y-auto rounded-2xl border border-[#2d2760] bg-[#1d1745] p-8">
        {/* Hero */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[#f0605d] text-[#f0605d]">
            <svg
              viewBox="0 0 24 24"
              className="h-9 w-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m8 6-6 6 6 6" />
              <path d="m16 6 6 6-6 6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">
            You've seen everyone
          </h2>
          <p className="max-w-xs text-sm text-[#a5a8ff]">
            No more developers match your filters right now. Here's what you can
            do next.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-3">
          <Link
            to="/home/request"
            className="rounded-xl bg-[#f0605d] py-3 font-bold text-[#0f0c29] hover:brightness-110 text-center"
          >
            Review the requests
          </Link>
          <Link
            to="/home/connection"
            className="rounded-xl border border-[#2d2760] py-3 text-center font-medium text-white hover:bg-[#2d2760]"
          >
            Message your connections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
