import {FlatList} from 'react-native'
import CategoryComponent from '../components/categorygridtile';
import { CATEGORIES } from '../data/dummy-data';



function CategoryScreen({navigation}){

    function renderfunction(itemdata){
      

        function onpressedhandler(){
            navigation.navigate("Meals Overview",{Categoryid: itemdata.item.id});
        }
        return (
            <CategoryComponent name={itemdata.item.title} color={itemdata.item.color} onpressed={onpressedhandler}/>
        )
    }
    return (
        <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => (item.id)}
        renderItem={renderfunction}
        numColumns={2}/>
    )
}

export default CategoryScreen;