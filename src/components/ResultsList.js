import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
    // console.log("_________________________________");

    // console.log(results);

    // results.forEach((e) => {
    //     console.log(e.restaurant);
    // });

    // console.log("_________________________________");
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                horizontal
                data={results}
                keyExtractor={(item) => item.restaurant.id}
                renderItem={({ item }) => {
                    return <Text>{item.restaurant.name} </Text>;
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ResultsList;
