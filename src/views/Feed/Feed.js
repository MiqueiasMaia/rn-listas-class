import {
    SafeAreaView, StyleSheet, Text, FlatList, TouchableWithoutFeedback, View
} from "react-native";

import FeedListItem from "../../components/FeedListItem/FeedListItem";

import { useRoute } from "@react-navigation/native";

const getId = () => Math.random().toString(12).substring(0);

const data = [
    {
        id: getId(),
        title: "Item 1",
    },
    {
        id: getId(),
        title: "Item 2",
    },
    {
        id: getId(),
        title: "Item 3",
    }
];

export default function Feed({ navigation }) {
    const route = useRoute();
    const { title } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionHeader}>{title}</Text>
            <FlatList
                data={data}
                renderItem={
                    ({ item }) => (
                        <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Detail', { title: item.title })}
                        >
                            <View>
                                <FeedListItem title={item.title} />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 40,
        color: '#000',
        alignSelf: "left",
        fontFamily: 'Roboto',
        marginbottom: 10,
        marginTop: 10,
        marginLeft: 15
    },
    container: {
        flex: 1,
    },
});
