import {View,FlatList} from 'react-native'
import MealsItem from './mealsitem'

function MealList({mealitems}){
    function renderfunc(itemdata){ 
        const itemm = {
            id: itemdata.item.id,
            title: itemdata.item.title,
            imageurl: itemdata.item.imageUrl,
            duration:itemdata.item.duration,
            complexity:itemdata.item.complexity,
            affordability:itemdata.item.affordability
        }

        return <MealsItem {...itemm}/>
    }
    return(
        <View>
           <FlatList 
           data={mealitems} 
           keyExtractor={(item) => item.id}
           renderItem={renderfunc}
           />
        </View>
    )

}

export default MealList;