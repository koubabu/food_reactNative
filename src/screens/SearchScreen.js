import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import zomato from "../api/zomato";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
const SearchScreen = () => {
    const [term, setTerm] = useState("");
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
                setResults(JSON.stringify(response.data.results_found));
                // setResults(JSON.stringify(response.data));
            })
            .catch((error) => {
                setErrorMessage("Something Went Wrong!!");
                console.log(error);
            });
    };
    //call searchAPI when first running the app
    //BAD CODE!!
    // searchApi("");

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#fff",
        flex: 1,
    },
});

export default SearchScreen;
