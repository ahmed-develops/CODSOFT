import '../style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';

const SearchBar = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [productState, setProductState] = useState({
        id: 0,
        image: "",
        title: "",
        price: "",
        category: ""
    });
    
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('http://localhost:3999/marketplace', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            });

            const recData = await res.json();
            setProducts(recData);
        };
        getProducts();
    }, []);

    const handleClick = (val) => {
        const newState = {
            id: val.id,
            image: val.image,
            title: val.title,
            price: val.price,
            category: val.category
        }
        setProductState(newState);
        // setProductState({
        //     id: val.id,
        //     image: val.image,
        //     title: val.title,
        //     price: val.price,
        //     category: val.category
        // });
        // console.log(productState.id);
        navigate('/product-page', { state: productState });
    };

    return (
        <>
            <div className="templateContainer">
                <div className="searchInput_Container">
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Search for products here.."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                </div>
                <div className="template_Container">
                    {products.length > 0 ? (
                        products
                            .filter((val) =>
                                searchTerm === "" ||
                                val.title.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((val) => (
                                <div
                                    className="mt-4"
                                    style={{ paddingBottom: '75px', paddingInline: '25px' , width: '300px' , height: '300px !important'}}
                                    key={val.id}
                                    // onClick={ async () => handleClick(val) }
                                    onClick={ () => {
                                        // const newState = {
                                        //     id: val.id,
                                        //     image: val.image,
                                        //     title: val.title,
                                        //     price: val.price,
                                        //     category: val.category
                                        // }
                                        // setProductState(newState);
                                        // // setProductState({
                                        // //     id: val.id,
                                        // //     image: val.image,
                                        // //     title: val.title,
                                        // //     price: val.price,
                                        // //     category: val.category
                                        // // });
                                        // // console.log(productState.id);
                                        navigate('/product-page', { state: val });
                                    }}
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-half h-half block"
                                        src={val.image}
                                    />
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        {val.category}
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        {val.title}
                                    </h2>
                                    <p className="mt-1">${val.price}</p>
                                </div>
                            ))
                    ) : (
                        <h1>Loading Catalog</h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchBar;
