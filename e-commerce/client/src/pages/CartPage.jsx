import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const CartPage = () => {
    const location = useLocation();
    const state = location.state;
    return (
        <>
            <Navbar />
            <Footer />
        </>
    );
}

export default CartPage;