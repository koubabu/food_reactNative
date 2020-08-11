import React from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
//we can also navigate another way
import { withNavigation } from "react-navigation";
const ResultsList = ({ title, results, navigation }) => {
    // console.log("_________________________________");

    // console.log(results);

    // results.forEach((e) => {
    //     console.log(e.restaurant);
    // });

    // console.log("_________________________________");

    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => item.restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ResultShow", {
                                    data: item.restaurant,
                                })
                            }
                        >
                            <ResultDetails results={item.restaurant} />
                            {/* return <Text>{item.restaurant.name} </Text>; */}
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    },
});

export default withNavigation(ResultsList);

//now ResultsList have access to all the navigation props
