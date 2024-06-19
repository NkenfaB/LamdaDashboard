import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../actions/authActions";

const Signup = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  const [loading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    setMessage("");
  };

  useEffect(() => {
    if (userInfo) {
      setMessage("Sign Up successful!");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else if (error) {
      setMessage(error);
    }
  }, [userInfo, error, navigate]);

  return (
    <section className="h-screen">
      <div className="container mx-auto h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 xl:w-5/12 border-2 border-b-[#001F3F] p-6 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row items-center justify-center lg:justify-start mb-4">
                <button
                  onClick={() => navigate("/")}
                  className="inline-block rounded bg-[#001F3F] px-4 py-2 text-white text-left"
                >
                  Back
                </button>
                <h1 className="text-2xl font-bold text-center ml-28">Signup</h1>
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
              <div className="relative mb-6">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="peer block w-full border border-b-[#001F3F] border-t-[#fffffF] border-r-[#ffffff] border-l-[#ffffff] rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                  placeholder="Username"
                  id="exampleFormControlInput3"
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer block w-full border border-b-[#001F3F] border-t-[#fffffF] border-r-[#ffffff] border-l-[#ffffff] rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                  placeholder="Email address"
                  id="exampleFormControlInput2"
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="peer block w-full border border-b-[#001F3F] border-t-[#fffffF] border-r-[#ffffff] border-l-[#ffffff] rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                  placeholder="Password"
                  id="exampleFormControlInput22"
                />
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="block min-h-[1.5rem] ps-[1.5rem]"></div>
                <a href="#!">Forgot password?</a>
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-[#001F3F] px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white"
                  enable={loading}
                >
                  {loading ? "Loading..." : "Signup"}
                </button>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <a href="/login" className="text-[#9A0202]">
                    Login
                  </a>
                </p>
              </div>
              {message && (
                <div className="mt-4 text-center text-red-600">{message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
