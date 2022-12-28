import {View, Text, StyleSheet} from 'react-native'

function MealDetails({duration,complexity,affordability ,style}){

    return(
        <View style={styles.itens}>
            <Text style={[styles.itemcontent,style]}>{duration}</Text>
            <Text style={[styles.itemcontent,style]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.itemcontent,style]}>{affordability.toUpperCase()}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    itens:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    itemcontent:{
        marginHorizontal:4,
        fontSize:14,

    }
})
export default MealDetails;