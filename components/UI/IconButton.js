import {Pressable, View, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function IconButton({icon, size, color, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    )
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        margin: 8,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: .75
    }
})
