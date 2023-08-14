import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
    const [userLoginInfo, setUserLoginInfo] = useState({
        email: null,
        password: null
    })

    return (
        <>
            <Navbar/>
            <SignInForm  saveState={setUserLoginInfo}/>
            <Footer/>
        </>
    );
}

export default SignIn;