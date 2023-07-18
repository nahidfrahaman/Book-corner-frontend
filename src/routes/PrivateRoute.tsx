import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const location = useLocation();
  console.log("location form privete route :", location);
  const { email } = useAppSelector((state) => state.isUserExist);

  if (!email) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
}
