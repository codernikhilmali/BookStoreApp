import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        login(res.data);
        alert("Login Successful");
        closeModal();
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        alert("Error: " + err.response.data.message);
      }
    }
  };

  useEffect(() => {
    // Ensure the modal is closed when the component unmounts
    return () => {
      const modal = document.getElementById("my_modal_3");
      if (modal) {
        modal.close();
      }
    };
  }, []);

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-5 space-y-3">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-5 space-y-3">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="enter your password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200">
                Login
              </button>
              <h3 className="mt-2">
                Not Register{" "}
                <Link to={"/SignUp"} className="underline text-blue-500 cursor-pointer">
                  SignUp
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
