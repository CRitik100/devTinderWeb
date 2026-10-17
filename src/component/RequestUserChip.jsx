const RequestUserChip = (props) => {
  const { photo, firstName, lastName, about, onReview } = props;

  return (
    <li className="list-row min-w-0 gap-2 sm:gap-4">
      <div>
        <img
          className="size-9 rounded-box sm:size-10"
          alt={`${firstName} ${lastName}`}
          src={photo}
        />
      </div>

      <div className="min-w-0">
        <div className="wrap-break-word font-medium">{`${firstName} ${lastName}`}</div>
        <div className="wrap-break-word text-xs font-semibold opacity-60">
          {about}
        </div>
      </div>

      {/* Reject */}
      <button
        className="btn btn-square btn-sm btn-ghost shrink-0 text-error hover:bg-error/10 sm:btn-md"
        aria-label="Reject request"
        title="Reject"
        onClick={() => onReview("rejected")}
      >
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M18 6L6 18M6 6l12 12"></path>
          </g>
        </svg>
      </button>

      {/* Accept */}
      <button
        className="btn btn-square btn-sm btn-ghost shrink-0 text-success hover:bg-success/10 sm:btn-md"
        aria-label="Accept request"
        title="Accept"
        onClick={() => onReview("accepted")}
      >
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </g>
        </svg>
      </button>
    </li>
  );
};

export default RequestUserChip;
