import { View,Text, Pressable, StyleSheet, Platform } from "react-native";

function CategoryComponent({name,color,onpressed}){
    return(
        <View style={styles.griditem}>
        <Pressable android_ripple={{color:'#ccc'}}  style={({pressed})=>pressed? [styles.button,styles.pressedbutton]: styles.button}
        onPress={onpressed}>
            <View style={[styles.innercontainer,{backgroundColor: color}]}>
                <Text style={styles.buttontext}>{name}</Text>
            </View>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    griditem:{
        flex:1,
        margin:16,
        elevation: 4,
        height:150,
        borderRadius:8,
        shadowColor: 'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:'white',
        overflow: Platform.OS==='android'? 'hidden':'visible',
    },

    button:{
        flex:1,
    },
    innercontainer:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        alignContent:'center',
        borderRadius:8,
    },
    pressedbutton:{
        opacity:0.5
    },
    buttontext:{
        fontSize:16,
        fontWeight:'bold'
    }
})

export default CategoryComponent;