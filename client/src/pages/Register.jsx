import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Register User
  const registerUser = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = data;

    try {
      const { data } = await axios.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <h1>Register</h1>
        <label>First Name</label>
        <input
          type="text"
          placeholder="enter first name"
          value={data.firstName}
          onChange={(event) =>
            setData({ ...data, firstName: event.target.value })
          }
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="enter last name"
          value={data.lastName}
          onChange={(event) =>
            setData({ ...data, lastName: event.target.value })
          }
        />
        <br />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
