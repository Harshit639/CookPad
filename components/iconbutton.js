import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({icon,color, onPressed}){
    return(
        <Pressable onPress={onPressed} style={({pressed}) => (pressed?styles.onPress:null)}>
            <Ionicons name={icon} color={color} size={24} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    onPress:{
        opacity:0.5,
    }
})
export default IconButton;