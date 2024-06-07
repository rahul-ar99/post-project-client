import { Metadata } from "next";
import Login from "./_component/Login"


export const metadata: Metadata = {
    title: "Login",
    description: "Post APP",
};
  
const LoginPage = ()=>{
    return<Login />
}

export default LoginPage