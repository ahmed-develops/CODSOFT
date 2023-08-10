import '../style.css';
// import {useState} from 'react';
import data from "../SampleData.json";
import { useEffect, useState } from 'react';

const SearchBar = () => {
    //     let data;

    //     const [products, setProducts] = useState({
    //        data: null
    //     });

    //     useEffect( () => {
    //         const getProducts = async () => {
    //             const res = await fetch('http://localhost:3999/marketplace', {
    //                 method: 'GET',
    //                 headers: {
    //                     'content-type' : 'application/json'
    //                 }
    //             });

    //             const data = await res.json();

    //             setProducts({
    //                 data: data
    //             })
    //         }

    //         getProducts();
    //     },[])

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <div className="templateContainer">
                <div className="searchInput_Container">
                    <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </div>
                <div className="template_Container">
                    {
                        data
                            .filter((val) => {
                                if (searchTerm == "") {
                                    return val;
                                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            })
                            .map((val) => {
                                return (
                                    // <div className="template" key={val.id}>
                                    //     {/* <img src={val.image} alt="" />
                                    //     <h3>{val.title}</h3>
                                    //     <p className="price">${val.price}</p> */}
                                        <div className="mt-4" style={{paddingBottom: '75px', paddingInline: '25px'}} key={val.id}>
                                            <img alt="ecommerce" className="object-cover object-center w-half h-half block" src={val.image}/>
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{val.category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{val.title}</h2>
                                            <p className="mt-1">${val.price}</p>
                                        </div>
                                    // </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    );
}

export default SearchBar;