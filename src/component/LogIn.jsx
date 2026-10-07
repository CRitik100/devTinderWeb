import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, useNavigate } from "react-router";
import { addUser } from "../utils/redux/slices/userSlice";
import { BASE_URL } from "../utils/constants";

const LogIn = () => {
  const [emailId, setEmailId] = useState("sc11@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const [showPassword, setShowPassword] = useState(false);
  const [isCorrectpassword, setIsCorrectPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const signIndata = { emailId, password };
      const { data } = await axios.post(BASE_URL + "/login", signIndata, {
        withCredentials: true,
      });
      dispatch(addUser(data));
      setIsCorrectPassword(true);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.response?.data);
      setIsCorrectPassword(false);
      console.log("error => " + error);
    }
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-[#110e2b] p-4">
      <div className="w-full max-w-md rounded-4xl border border-[#2d2760] bg-[#1d1745] p-8 sm:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#f1eeff]">
          Welcome back, dev.
        </h1>
        <p className="mt-3 text-lg text-[#8b84b8]">
          Log in to see who wants to build with you.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-[#f1eeff]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-2xl border-2 border-[#2d2760] bg-[#110e2b] px-5 py-4 text-lg text-[#f1eeff] placeholder-[#8b84b8] outline-none transition focus:border-[#eb5e7c]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-semibold text-[#f1eeff]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full rounded-2xl border-2 border-[#2d2760] bg-[#110e2b] px-5 py-4 text-lg text-[#f1eeff] placeholder-[#8b84b8] outline-none transition focus:border-[#eb5e7c] pr-20"
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

          <div className="text-[#c9c4e8] flex-col justify-between">
            <a
              href="/forgot-password"
              className="font-semibold text-[#f1eeff] hover:underline"
            >
              Forgot password?
            </a>
            <div
              className={`font-semibold text-[#ec1342] underline ${isCorrectpassword ? "hidden" : "block"}`}
            >
              {errorMessage}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#eb5e7c] py-4 text-lg font-semibold text-white transition hover:brightness-110 active:scale-[0.99] cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-[#8b84b8]">
          New here?{" "}
          <a
            className="font-semibold text-[#f1eeff] hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Create your profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
