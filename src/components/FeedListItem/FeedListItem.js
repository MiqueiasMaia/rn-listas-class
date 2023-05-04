import { StyleSheet, Text, View, Image } from "react-native";

export default function FeedListItem({ title }) {
    return (
        <View style={styles.item}>
            <View>
                <Image
                    style={styles.avatar}
                    source= {
                        require("../../assets/mario.PNG")
                    }
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'left',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'left',
        fontFamily: 'Roboto',
    },
    description: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Roboto',
        alignSelf: 'center',
        fontStyle: 'italic',
    },
    item: {
        backgroundColor: '#0b0b0b',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        heigth: 100,
        justifyContent: 'center',
        borderRadius: 10,
    },
    avatar : {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1,
        marginRight: 10,
    }
});