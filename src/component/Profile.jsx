import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCards";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/redux/slices/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const loggedinUser = useSelector((store) => store.user?.data);
  const [firstName, setFirstName] = useState(loggedinUser?.firstName);
  const [lastName, setLastName] = useState(loggedinUser?.lastName);
  const [photo, setPhoto] = useState(loggedinUser?.photo);
  const [age, setAge] = useState(loggedinUser?.age || 18);
  const [gender, setGender] = useState(loggedinUser?.gender || "");
  const [about, setAbout] = useState(loggedinUser?.about);
  const [skills, setSkills] = useState(loggedinUser?.skills);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const inputClass =
    "w-full rounded-2xl border-2 border-[#2d2760] bg-[#110e2b] px-4 py-2 text-[#f1eeff] placeholder-[#8b84b8] outline-none transition focus:border-[#eb5e7c]";
  const labelClass = "mb-1 block font-semibold text-[#f1eeff]";

  const previewUser = {
    firstName,
    lastName,
    photo,
    age,
    gender,
    about,
    skills,
  };

  const oncancel = () => {
    navigate("/home");
  };

  const onSave = async () => {
    try {
      const updatedData = await axios.patch(
        BASE_URL + "/profile/update",
        previewUser,
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(updatedData?.data?.data));
      navigate("/home");
    } catch (error) {
      setErrorMessage(error?.response?.data);
      console.log(error);
    }
  };

  return (
    <main className="relative min-h-[calc(100dvh-4rem)] bg-[#110e2b] px-3 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-5 sm:gap-6 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-8">
        <section className="w-full min-w-0 rounded-3xl border border-[#2d2760] bg-[#1d1745] p-4 sm:rounded-4xl sm:p-6 lg:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#f1eeff]">
            Edit your profile.
          </h1>
          <p className="mt-1 text-[#8b84b8]">
            Let other developers know who you are and what you like to build.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-3 space-y-2.5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass}
                  autoComplete="given-name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={inputClass}
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="photo" className={labelClass}>
                Profile photo URL
              </label>
              <input
                id="photo"
                name="photo"
                type="url"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="age" className={labelClass}>
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Your age"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="gender" className={labelClass}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={`select ${inputClass} appearance-none  `}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="about" className={labelClass}>
                About you
              </label>
              <textarea
                id="about"
                name="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="What are you working on?"
                rows={2}
                className={`${inputClass} resize-y`}
              />
            </div>

            <div>
              <label htmlFor="skills" className={labelClass}>
                Skills
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value.split(","))}
                placeholder="React, Node.js, TypeScript"
                className={inputClass}
              />
              <p className="mt-2 text-sm text-[#8b84b8]">
                Separate each skill with a comma.
              </p>
            </div>
            <div
              className={`font-semibold text-[#ec1342] underline ${errorMessage == "" ? "hidden" : "block"}`}
            >
              {errorMessage}
            </div>

            <div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={oncancel}
                  className="flex-1 rounded-2xl border-2 border-[#2d2760] py-3 text-lg font-semibold text-[#8b84b8] transition hover:border-[#8b84b8] hover:text-[#f1eeff] active:scale-[0.99] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={onSave}
                  className="flex-1 rounded-2xl bg-[#eb5e7c] py-3 text-lg font-semibold text-white transition hover:brightness-110 active:scale-[0.99] cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>

        <div className="flex w-full justify-center">
          <UserCard user={previewUser} />
        </div>
      </div>
    </main>
  );
};

export default Profile;
