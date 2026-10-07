import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/redux/slices/feedSlice";

const UserCard = ({ user }) => {
  let { firstName, lastName, photo, age, gender, about, skills = [] } = user;
  const dispatch = useDispatch();

  const onPass = () => {
    dispatch(removeFeed());
  };
  const onInterested = () => {
    dispatch(removeFeed());
  };
  const meta = [age, gender].join(", ");
  const MAX_SKILLS = 5;
  const shownSkills = skills.slice(0, MAX_SKILLS);
  const extra = skills.length - shownSkills.length;

  if (["https://www.example.com", ""].includes(photo)) {
    photo = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png";
  }

  return (
    <article className="flex h-150 w-full max-w-sm flex-col overflow-hidden rounded-4xl border border-[#2d2760] bg-[#1d1745]">
      {/* Photo with name overlay */}
      <div className="relative min-h-0 w-full flex-1 bg-linear-to-br from-[#eb5e7c] to-[#5b4bff]">
        <img src={photo} alt="photo" className="h-full w-full object-cover" />

        {/* fade so text stays readable on any photo */}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#1d1745] via-[#1d1745]/80 to-transparent px-6 pb-5 pt-24">
          <h2 className="text-3xl font-bold tracking-tight text-[#f1eeff]">
            {firstName} {lastName}
          </h2>
          {meta && <p className="mt-1 text-[#c9c4e8]">{meta}</p>}
        </div>
      </div>

      {/* Details */}
      <div className="shrink-0 space-y-5 px-6 pb-6 pt-2">
        {about && (
          <p className="line-clamp-3 leading-relaxed text-[#c9c4e8]">{about}</p>
        )}

        {shownSkills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {shownSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#2d2760] bg-[#110e2b] px-3 py-1 text-sm font-semibold text-[#f1eeff]"
              >
                {skill}
              </span>
            ))}
            {extra > 0 && (
              <span className="rounded-full px-2 py-1 text-sm font-semibold text-[#8b84b8]">
                +{extra} more
              </span>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onPass}
            className="flex-1 rounded-2xl border-2 border-[#2d2760] py-3.5 text-lg font-semibold text-[#8b84b8] transition hover:border-[#8b84b8] hover:text-[#f1eeff] active:scale-[0.99] cursor-pointer"
          >
            Pass
          </button>
          <button
            type="button"
            onClick={onInterested}
            className="flex-1 rounded-2xl bg-[#eb5e7c] py-3.5 text-lg font-semibold text-white transition hover:brightness-110 active:scale-[0.99] cursor-pointer"
          >
            Let's build
          </button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
