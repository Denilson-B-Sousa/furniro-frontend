import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import { auth } from 'firebase-config';
import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextData = {
  user: User | null;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (name: string, email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
};

interface IUserAuthProvider {
  children: React.ReactNode;
}

const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  return signOut(auth);
};

const userAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
});

export const UserAuthProvider: React.FunctionComponent<IUserAuthProvider> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log('The logged in user state is: ', currentUser);
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value: AuthContextData = {
    user,
    logIn,
    signUp,
    logOut,
  };

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
