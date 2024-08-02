
interface IProtectedRoutesProps {}
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes: React.FunctionComponent<
  IProtectedRoutesProps
> = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (!user) {
    return <Navigate to='/auth/login' />;
  }

  return <Outlet />;
};
