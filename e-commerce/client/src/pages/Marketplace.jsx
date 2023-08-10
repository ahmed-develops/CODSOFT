import Footer from "../components/Footer";
import MarketplaceCatalog from "../components/MarketplaceCatalog";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Marketplace = () => {
    return (
        <>
            <Navbar/>
            <SearchBar/>
            <MarketplaceCatalog/>
            <Footer/>
        </>
    );
}

export default Marketplace;