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
    <div>
      <form onSubmit={loginUser}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          placeholder="enter email"
          value={data.email}
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password"
          value={data.password}
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
