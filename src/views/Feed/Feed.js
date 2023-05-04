import {
    SafeAreaView, StyleSheet, Text
} from "react-native";

export default function Feed({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Feed</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
