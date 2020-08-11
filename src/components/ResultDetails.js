import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultDetails = ({ results }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: results.thumb }} />
            <Text style={styles.name}>{results.name}</Text>
            <Text>
                {results.user_rating.aggregate_rating} Stars,{" "}
                {results.all_reviews_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 140,
        borderRadius: 4,
    },
    name: {
        fontWeight: "bold",
        fontSize: 15,
    },
});

export default ResultDetails;
