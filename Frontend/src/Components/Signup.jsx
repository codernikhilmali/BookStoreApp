import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 border-[3px] shadow-md rounded-md p-6 relative w-full max-w-md mx-4">
        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</Link>
        <h3 className="font-bold text-lg text-center">SignUp</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-3">
          <div className="mt-5 space-y-3">
            <label htmlFor="nameid" className="block">Name</label>
            <input
              id="nameid"
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-3 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-5 space-y-3">
            <label htmlFor="email" className="block">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-5 space-y-3">
            <label htmlFor="password" className="block">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-between mt-4 items-center">
            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200" onClick={() => document.getElementById("my_modal_3").showModal()}>SignUp</button>
            <p className="mt-2">
              Already registered? <Link to={"/"}> 
              <button type="button" className="underline text-blue-500">Login</button>
              </Link>
            </p>
          </div>
        </form>
        <Login />
      </div>
    </div>
  );
};

export default Signup;
