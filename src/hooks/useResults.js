import { useState, useEffect } from "react";
import axios from "axios";
import zomato from "../api/zomato";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = (searchTerm) => {
        zomato
            .get("/search", {
                params: {
                    lat: "22.572646",
                    lon: "88.363895",
                    q: searchTerm,
                },
            })
            .then((response) => {
                // console.log(response.data.restaurants);
                // setResults(JSON.stringify(response.data.results_found));
                setResults(response.data.restaurants);
                // console.log(response.data.restaurants);
            })
            .catch((error) => {
                setErrorMessage("Something Went Wrong!!");
                console.log(error);
            });
    };
    //call searchAPI when first running the app
    //BAD CODE!!
    // searchApi("");

    // useEffect(()=>{})               run the arrow fuction every time the component is rendered
    // useEffect(()=>{},[])            when the component first rendered
    // useEffect(()=>{},[value])       when the component first rendered & the value changes

    useEffect(() => {
        searchApi("");
    }, []);

    return [searchApi, errorMessage, results];
};
