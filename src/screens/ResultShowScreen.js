import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import zomato from "../api/zomato";

const ResultShowScreen = ({ navigation }) => {
    const data = navigation.getParam("data");
    const id = data.id;
    const [results, setResults] = useState(null);

    // console.log("_________");
    // console.log(results.apikey);
    const getResult = (id) => {
        zomato
            .get("/restaurant", {
                params: {
                    res_id: id,
                },
            })
            .then((response) => {
                setResults(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getResult(id);
    }, []);
    if (!results) {
        return null;
    }
    return (
        <View>
            <Text>{results.name}</Text>
            <Text>average_cost_for_two : {results.average_cost_for_two}</Text>
        </View>
    );
};

const styles = StyleSheet.create();

export default ResultShowScreen;
