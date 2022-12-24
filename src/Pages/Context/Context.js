import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { intrastate, reducer } from "../Reducer/Reducer";
import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../../component/Action/ActionType";
const auth = getAuth(app);
export const AUTH_CONTEXT = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    loading: false,
    error: "",
    useName: null,
  });

  const [state, disPatch] = useReducer(reducer, intrastate);
  useState(() => {
    disPatch({ type: FETCHING_START });
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        disPatch({ type: FETCHING_SUCCESS, payload: data }); // data.data
      })
      .catch((error) => {
        disPatch({ type: FETCHING_ERROR });
      });
  }, []);

  const RegisterWithEmailPass = async (name, email, password, navigate) => {
    try {
      setUser({ ...user, loading: true, error: "" });
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      // photoURL:
      navigate('/')
    } catch (error) {
      setUser({ error: error.message });
    } finally {
      // setUser({ ...user, loading: false });
    }
  };
  const singIn = (email, password) => {
    setUser({ loading: true });
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = async () => {
    setUser({ loading: true });
    return signOut(auth);
  };
  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({loading: false})
        setUser({ ...user, user: user.email, useName: user.displayName });
        console.log(user);
      } else {
        // user is sing out
      }
    });

    return () => {
      currentUser();
    };
  }, []);
  const sharedInfo = {
    RegisterWithEmailPass,
    singIn,
    signOutUser,
    user,
  };

  return (
    <AUTH_CONTEXT.Provider value={sharedInfo}>{children}</AUTH_CONTEXT.Provider>
  );
};

export const useAuth = () => useContext(AUTH_CONTEXT);
export default Context;
