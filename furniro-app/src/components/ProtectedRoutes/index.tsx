
interface IProtectedRoutesProps {}
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes: React.FunctionComponent<
  IProtectedRoutesProps
> = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <div>...Loading</div>;
  }

  if (!user) {
    return <Navigate to='/auth/login' replace state={{ from: location }} />;
  }

  return <Outlet />;
};
