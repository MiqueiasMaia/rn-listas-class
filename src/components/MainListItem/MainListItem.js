import { StyleSheet, Text, View } from "react-native";

export default function MainListItem({ item }) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
    },
    item: {
        backgroundColor: '#0b0b0b',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        heigth: 100,
        justifyContent: 'center',
        borderRadius: 10,
    }
});