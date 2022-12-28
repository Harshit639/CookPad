import {createContext, useState} from 'react';

export const FavouriteContext = createContext({
    ids:[],
    addfavourite:(id) => {},
    removefavourite: (id) => {}
})

function FavouriteContextHandler({children}){
    const [favmealids,setfavmealids] = useState([]);
    function add(id){
        setfavmealids((currrentfavids) => [...currrentfavids,id])
    }

    function remove(id){
        setfavmealids((currrentfavids) => currrentfavids.filter((mealid) => mealid!=id))
    }
    
    const value={
        ids: favmealids,
        addfavourite: add,
        removefavourite:remove,
    }
    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default FavouriteContextHandler;