import { createContext, React, useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ImSpinner9 } from "react-icons/im";
import { auth } from "../auth/Firebase";

export const  authContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });

  const [loading, setLoading] = useState();

  function onAuthChanged(user) {
    // console.log(user)
    if(user){
        setUser({isLogin : true, userInfo : {
            name : user.displayName,
            email : user.email,
            photoURL : user.photoURL,
        }})
    }else{
        setUser({isLogin : false, userInfo : {}})
        
    }

    setLoading(false); 
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged( auth, onAuthChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <authContext.Provider value={{ user, setUser }}>
      {loading ? (
            <h1 className="text-4xl text-red-900">Loading...</h1>
        // <div className="text-red-700 w-full h-96 flex justify-center items-center">
        //   {/* <ImSpinner9 /> */}
        // </div>
      ) : (
        children
      )}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
