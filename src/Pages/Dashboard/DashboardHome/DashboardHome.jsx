import {  useState } from "react";
// import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import Modal from "react-modal";
// import { AuthContext } from "../../../providers/AuthProvider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DashboardHome = () => {
  const [loader, setLoader] = useState(false);
//   const { user, logOut, authReloader, setAuthReloader, changePassword } =
//     useContext(AuthContext);
  // console.log("-> Here is the user: ");
  // console.log(user);

  const isPasswordValid = (password) => {
    if (password.length < 8) {
      return false;
    }
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    return hasLetter && hasNumber;
  };

  const handleChangePassword = async (e) => {
    setLoader(true);
    e.preventDefault();
    const newPass = e.target.newPassword.value;
    if (!isPasswordValid(newPass)) {
      toast.error("Password not valid!");
      setLoader(false);
      return;
    }
    // try {
    //   await changePassword(newPass);
    //   toast.success("Password changed successfully");
    //   await logOut();
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something went wrong! Try again!");
    // }
    setLoader(false);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

 

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <p className="text-3xl md:text-5xl font-bold">
        Admin <span className="text-orange-500">Dashboard</span>
      </p>
      {/* <p className="font-semibold md:text-xl">Welcome - {user.email}</p> */}
      <p className="font-semibold md:text-xl">
        Where you can{" "}
        <span className="text-orange-500">customize everything</span>
      </p>
      <div className="flex items-center gap-5 mt-6">
        <button
          onClick={async () => {
            // await logOut();
            // setAuthReloader(!authReloader);
            toast.success("Logout successful");
          }}
          className="bg-red-500 text-white font-semibold px-4
       py-2 rounded-md duration-300 active:scale-90 "
        >
          Logout
        </button>
       
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleChangePassword} className="p-10">
          <input
            className="bg-orange-400 px-5 py-3 focus:outline-none rounded-md font-semibold w-full text-white placeholder:text-white"
            type="password"
            placeholder="Enter new password"
            required
            name="newPassword"
          />
          <p className="text-xs my-3 text-red-600 font-medium">
            * Must 8 Digit && * Must Letter && * Must Number
          </p>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold px-4
       py-2 rounded-md duration-300 active:scale-90 flex items-center justify-center"
            >
              {loader ? (
                <FaSpinner className="text-white animate-spin" />
              ) : (
                "Change Password"
              )}
            </button>{" "}
            <p
              onClick={closeModal}
              className="bg-red-500 text-white font-semibold px-4
       py-2 rounded-md duration-300 active:scale-90 select-none"
            >
              Close
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DashboardHome;
