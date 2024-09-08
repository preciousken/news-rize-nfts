import { SERVER_BASE_URL } from "../lib/utils";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");

  const loginAction = async (data) => {
    try {
      const response = await fetch(SERVER_BASE_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (res.status) {
        setUser(res.userData);
        setToken(res.token);
        localStorage.setItem("site", res.token);

        // window.location.href = "/dashboard";
        return;
      }
      throw new Error(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
