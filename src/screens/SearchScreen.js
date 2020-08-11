import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState("");
    const [searchApi, errorMessage, results] = useResults();

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                {/* <Text>We have found {results.length}</Text> */}
                <ResultsList results={results} title="Cost effective" />
                <ResultsList
                    navigation={navigation}
                    results={results}
                    title="Bit Pricer"
                />
                <ResultsList
                    navigation={navigation}
                    results={results}
                    title="Big Spender"
                />
            </ScrollView>
        </View>
    );

    // searchApi errorMessage results  these 3
    // things are needed in our search screen from hook
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#fff",
        flex: 1, //it will take as much space as possible
    },
});

export default SearchScreen;
