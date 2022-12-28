import { useContext, useLayoutEffect } from 'react';
import {Text,View,Image,StyleSheet, ScrollView, Button} from 'react-native'
import IconButton from '../components/iconbutton';
import MealIng from '../components/mealDetail';
import MealDetails from '../components/mealdetails';
import { MEALS } from '../data/dummy-data';
import { FavouriteContext } from '../store/context/favourite-context';

function MealDetailScreen({route,navigation}){
    const mealid = route.params.mealid;
    const mealiteanary = MEALS.find((meals) => meals.id===mealid )

    const favmealcontext= useContext(FavouriteContext);

    const isfavmeal=  favmealcontext.ids.includes(mealid);

    function favstatushandler(){
        if(!isfavmeal){
            favmealcontext.addfavourite(mealid);
        }else{
            favmealcontext.removefavourite(mealid);
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {return <IconButton icon={isfavmeal?'star':'star-outline'} color={'white'} onPressed={favstatushandler}/>}
        })
    },[navigation,favstatushandler])


    
    return(
        <ScrollView style={styles.styleroot}> 
        <View>
            <Image source={{uri: mealiteanary.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{mealiteanary.title}</Text>
            <MealDetails complexity={mealiteanary.complexity} duration={mealiteanary.duration} affordability={mealiteanary.affordability} style={styles.additional}/>
            <View style={styles.listoutercontainer}>
                <View style={styles.listinnercontainer}>
                    <View style={styles.textcontainer}>
                    <Text style={styles.subtitle}>INGREDIENTS</Text>
                    </View>
                    <MealIng data={mealiteanary.ingredients}/>
                    <View style={styles.textcontainer}>
                    <Text  style={styles.subtitle}>STEPS</Text>
                    </View>
                    <MealIng data={mealiteanary.steps}/>
                </View>
            </View>
        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    styleroot:{
        marginBottom:40,
    },
    image:{
        width:'100%',
        height:350     
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white',
    },
    additional:{
        color: 'white'
    },

    subtitle:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
       
    },
    textcontainer:{
        padding:6,
        borderBottomColor:'white',
        borderBottomWidth:2,
        marginHorizontal:16,
        marginVertical:4,
    },
    listoutercontainer:{
        alignItems:'center'
    },
    listinnercontainer:{
        width:'80%',
       
    }
    
})
export default MealDetailScreen;