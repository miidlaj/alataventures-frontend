import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);
  
    useEffect(() => {
      if (localStorage.getItem("token")) {
        setCurrentUser({ id: "1", name: "foo" });
      } else {
        setCurrentUser(null);
      }
    }, []);
  
    if (currentUser === undefined) {
      return null;
    }
  
    if (!currentUser) {
      return <Navigate to="/admin/login" />;
    }
  
    return children;
  };

  export default Auth;