import { Metadata } from "next";
import SignUpPage from "./_component/Signup";


export const metadata: Metadata = {
    title: "Signup",
    description: "Post APP",
};
  

const SignUp = ()=>{
    return (<SignUpPage />)
}

export default SignUp