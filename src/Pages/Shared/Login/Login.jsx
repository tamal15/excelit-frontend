import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {  loginWithOwnEmailAndPass, authError } = useAuth();

  // Location & Navigate
  const location = useLocation();
  const navigate = useNavigate();

 

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    loginWithOwnEmailAndPass(data.email, data.password, location, navigate);
  };

  const [showPassword, setShowPassword] = useState(false);

  // Function to handle the visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="py-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Left Section */}
            <div className="flex-shrink-0">
              <img
                className="rounded-lg"
                src="https://i.ibb.co/PYRQwwP/1622955529676.png"
                alt="Login Illustration"
                width={360}
                height={340}
              />
            </div>

            {/* Right Section */}
            <div className="bg-blue-900 text-black p-8 rounded-lg w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-6 text-center text-white mt-10">
                Login to ToCash
              </h2>
              <form className="h-64 w-96" onSubmit={handleSubmit(onSubmit)}>
                {/* Email Input */}
                <div className="mb-4 ">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    placeholder="Enter Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
                >
                  Login
                </button>

                <div className="login-meta mt-3">
                                    <p className="text-white">
                                        New to Education?{" "}
                                        <Link to="/signup">
                                            <span className="login-links">Create a free Account</span>
                                        </Link>
                                    </p>
                                    {/* <p className='text-white cursor-pointer' onClick={() => setShowResetForm(!showResetForm)}>Forget Password?</p> */}
                                </div>
              </form>

             

              {/* Error Alert */}
              {authError && (
                <div
                  className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
                  role="alert"
                >
                  <span>{authError}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
