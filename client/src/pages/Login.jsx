import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Login User
  const loginUser = async (event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onSubmit={loginUser}
      class="flex justify-center items-center h-screen bg-[#3B40E8]"
    >
      <form class="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl block text-center font-semibold">
          <i class="fa-solid fa-user"></i> Login
        </h1>
        <hr class="mt-3" />
        <div class="mt-3">
          <label for="username" class="block text-base mb-2">
            Username
          </label>
          <input
            type="email"
            placeholder="enter email"
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div class="mt-3">
          <label for="password" class="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="enter password"
            value={data.password}
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div class="mt-3 flex justify-between items-center">
          <div>
            <a href="#" class="text-[#3B40E8] font-semibold">
              Sign up?
            </a>
          </div>
        </div>
        <div class="mt-5">
          <button
            type="submit"
            class="border-2 border-[#3B40E8] bg-[#3B40E8] text-white py-1 w-full rounded-md hover:bg-transparent hover:text-[#3B40E8] font-semibold"
          >
            <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
