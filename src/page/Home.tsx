/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import Card from "../components/ui/Card";
import Header from "../components/ui/Header";
import { addtoken } from "../redux/features/auth/tokenSlice";
import { isUserExist } from "../redux/features/user/userSlice";

interface IDecode {
  UserName: string;
  email: string;
  exp?: number;
  iat?: number;
}

export default function Home() {
  const dispatch = useDispatch();

  const token: string | null = localStorage.getItem("accessToken");

  console.log("token from home:", token);
  if (token) {
    const decoded: IDecode = jwt_decode(token);
    dispatch(addtoken(token));
    dispatch(isUserExist(decoded.email));
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Card></Card>
    </div>
  );
}
