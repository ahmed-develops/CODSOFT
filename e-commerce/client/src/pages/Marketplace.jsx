import Footer from "../components/Footer";
import MarketplaceCatalog from "../components/MarketplaceCatalog";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
// import {useEffect, useState} from 'react';

const Marketplace = () => {

    // const [state, setState] = useState({
    //     title: null,
    //     category: null,
    //     id: null,
    //     price: 0
    // })

    // const saveState = ({title, category, id, price}) => {
    //     setState({
    //         title: title,
    //         category: category,
    //         id: id,
    //         price: price
    //     })
    // }

    return (
        <>
            <Navbar />
            <SearchBar/>
            <MarketplaceCatalog/>
            <Footer />
        </>
    );
}

export default Marketplace;