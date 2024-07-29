/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { auth } from 'firebase-config';
import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextData = {
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
};

interface IUserAuthProvider {
  children : React.ReactNode
}

const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signUp = (name: string, email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  signOut(auth);
};

export const userAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut
});

export const UserAuthProvider: React.FunctionComponent<IUserAuthProvider> = ({children}) => {
  
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log("The logged in user state is: ", user);
        setUser(user);
      }

      return () => {
        unsubscribe();
      }
    });
})
  const value: AuthContextData = {
    user: null,
    logIn,
    signUp,
    logOut,
  };

  return(
    <userAuthContext.Provider value={value}>{children}</userAuthContext.Provider>
  )
}

export const useUserAuth = () => {
  return useContext(userAuthContext)
}