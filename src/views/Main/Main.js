import {
    SafeAreaView,
    StyleSheet,
    TouchableWithoutFeedback,
    VirtualizedList,
    View
} from "react-native";

import MainListItem from "../../components/MainListItem/MainListItem";

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index}`,
});

const getItemCount = (data) => 100;

export default function Main({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                getItem={getItem}
                getItemCount={getItemCount}
                renderItem={
                    ({ item }) => (
                        <TouchableWithoutFeedback onPress={
                            () => navigation.navigate('Feed', { title: item.title })
                        }>
                            <View>
                                <MainListItem item={item.title} />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
