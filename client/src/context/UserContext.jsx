import axios from "axios";
import { createContext, useState, useEffect } from "react";

// Create the context to share user data
const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // fetch the current user profile
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  // Provide user, setUser to children components
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
