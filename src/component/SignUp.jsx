import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAnyError, setIsAnyError] = useState(false);

  const inputClass =
    "w-full rounded-2xl border-2 border-[#2d2760] bg-[#110e2b] px-5 py-4 text-lg text-[#f1eeff] placeholder-[#8b84b8] outline-none transition focus:border-[#eb5e7c]";
  const labelClass = "mb-2 block font-semibold text-[#f1eeff]";

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true },
      );
      setIsAnyError(false);
      navigate("/home/profile");
    } catch (err) {
      setErrorMessage(err.response?.data);
      setIsAnyError(true);
      console.error(err);
    }
  };

  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-[#110e2b] p-4">
      {/* soft glows behind the card */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#eb5e7c] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#5b4bff] opacity-25 blur-3xl" />

      <div className="relative  max-w-5xl">
        <div className="w-full rounded-4xl border border-[#2d2760] bg-[#1d1745] p-8 sm:p-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#f1eeff]">
            Create your profile.
          </h1>
          <p className="mt-3 text-lg text-[#8b84b8]">
            Sign up and start matching with devs who want to build.
          </p>

          <form onSubmit={handleSignup} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Sam"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Smith"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className={`${inputClass} pr-20`}
                  required
                />
                <button
                  type="button"
                  className="absolute right-5 top-3 text-sm font-semibold text-[#8b84b8] hover:text-[#f1eeff] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div
              className={`font-semibold text-[#ec1342] underline ${isAnyError ? "block" : "hidden"}`}
            >
              {errorMessage}
            </div>

            <button
              type="submit"
              className="w-full mt-0.5 rounded-2xl bg-[#eb5e7c] py-4 text-lg font-semibold text-white transition hover:brightness-110 active:scale-[0.99] cursor-pointer"
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-center text-[#8b84b8]">
            Already have a profile?{" "}
            <a
              className="font-semibold text-[#f1eeff] hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
