import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const LandingPage = () => {
    const location = useLocation();
    const state = location.state;
    return (
        <>
            <Navbar state={state}/>
            <Footer/>
        </>
    );
}

export default LandingPage;