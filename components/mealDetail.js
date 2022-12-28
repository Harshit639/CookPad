import {View,Text,StyleSheet} from 'react-native'


function MealIng({data}){
    return(
        data.map((ing)=>(
            <View key={ing} style={styles.listitem}>
            <Text style={styles.itemtext}>{ing}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    listitem:{
        borderRadius:8,
        backgroundColor:'#e2b497',
        marginVertical:2,
        marginHorizontal:4,
        paddingHorizontal:8,
        paddingVertical:4, 
    },
    itemtext:{
        color:'#351401',
        textAlign:'center',
    }
})

export default MealIng;