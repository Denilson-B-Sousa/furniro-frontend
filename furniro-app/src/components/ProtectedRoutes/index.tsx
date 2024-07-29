
interface IProtectedRoutesProps {}
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (
) => {
  const isAuth: boolean = false;
  const location = useLocation();
  return isAuth ? (<Outlet/>) : (
    <Navigate to="/auth/login" state={{ from: location }}/>
  );
}

