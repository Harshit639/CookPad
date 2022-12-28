import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import FavouriteContextHandler from './store/context/favourite-context';
import CategoryScreen from './screens/categoryscreen';
import MealsOverview from './screens/mealsoverview';
import MealDetailScreen from './screens/mealdetailscreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/favourite';

const Stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

function Drawernavigator(){
  return <drawer.Navigator useLegacyImplementation={true} screenOptions={{
    headerStyle: {backgroundColor: '#351402'},
    headerTintColor: 'white',
    sceneContainerStyle:{backgroundColor:'#3f2f25'},
    drawerActiveBackgroundColor:'#b89580',
    drawerStyle:{ backgroundColor:'#3f2f25'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#3f2f25',
  }}>
    <drawer.Screen name='categories' component={CategoryScreen} options={{
      title:"All Categories"
    }}/>
    <drawer.Screen name='favourite' component={FavouriteScreen}/>
  </drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <FavouriteContextHandler>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {backgroundColor: '#351402'},
        headerTintColor: 'white',
        
        contentStyle:{backgroundColor:'#3f2f25'}}}>
        <Stack.Screen name="drawer" component={Drawernavigator}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Meals Overview" component= {MealsOverview}/>
        <Stack.Screen name="Meal Details" component= {MealDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   </FavouriteContextHandler>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
