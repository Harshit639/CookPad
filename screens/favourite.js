import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/meallist";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourite-context";

function FavouriteScreen(){

    const favconst = useContext(FavouriteContext);

    const mealsitems = MEALS.filter((meal) => favconst.ids.includes(meal.id));

    if(mealsitems.length===0){
        return(
            <View style={styles.outercontainer}>
            <Text style={styles.text}>No Favourite's Yet</Text>
            </View>
        )
    }

    return(
        <MealList mealitems={mealsitems}/>
    )

}

const styles =StyleSheet.create({
    outercontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})

export default FavouriteScreen;