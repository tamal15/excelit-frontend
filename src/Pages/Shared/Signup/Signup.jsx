import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { registerUser, authError } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Your passwords do not match");
      return;
    }

    registerUser(data.email, data.password, data.name, location, navigate);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2 p-6 flex justify-center ">
            <img
              data-aos="zoom-in"
              src="https://i.ibb.co/PYRQwwP/1622955529676.png"
              alt="Signup Illustration"
              className="h-64 w-72 object-contain"
            />
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Sign Up to ToCash
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name", { required: true })}
                placeholder="Enter Full Name"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", { required: true })}
                placeholder="Enter Email"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password", { required: true })}
                  placeholder="Enter Password"
                />
                <span
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password2", { required: true })}
                  placeholder="Re-enter Password"
                />
                <span
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  onClick={togglePassword2Visibility}
                >
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account? {" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login here
                </Link>
              </p>
            </div>

            {authError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
                {authError}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
