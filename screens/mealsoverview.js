import {View,Text, FlatList} from 'react-native'
import MealsItem from '../components/mealsitem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import {useLayoutEffect} from 'react';
import MealList from '../components/meallist';

function MealsOverview({route,navigation}){

    const id = route.params.Categoryid

    const mealitems = MEALS.filter((mealitem) => { return mealitem.categoryIds.indexOf(id)>=0;})
    
    useLayoutEffect(()=> {
    const categorytitle = CATEGORIES.find((categories)=> {return categories?categories.id===id:null}).title;
    navigation.setOptions({
        title: categorytitle
    })
    })

   return <MealList mealitems={mealitems}/>
}

export default MealsOverview;