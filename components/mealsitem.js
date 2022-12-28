import {View,Text, Pressable, Image,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MealDetails from './mealdetails';
function MealsItem({id,title,imageurl,duration,complexity,affordability}){

    const navigation = useNavigation();

    function navigatorfunction(){
        navigation.navigate("Meal Details",{mealid: id})
    }


    return(
        <View style={styles.mealitem}> 
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=>(pressed? styles.pressed : null)} onPress={navigatorfunction} >
        <View style={styles.container}>
        <View>
        <Image source={{uri: imageurl}} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails affordability={affordability} complexity={complexity} duration={duration} />
        </View>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    mealitem:{
        margin:30,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,
        shadowColor: 'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:'white',
        overflow: Platform.OS==='android'? 'hidden':'visible',
    },
    pressed:{
        opacity:0.5,
    },
    image:{
        width:'100%',
        height:200,
    },
    container:{
        borderRadius:8,
        overflow:'hidden',
    },
    title:{
        fontWeight:'bold',
        fontSize:'center',
        fontSize:18,
        textAlign:'center',
        margin:8,
    },
    
})

export default MealsItem;