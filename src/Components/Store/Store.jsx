import {createStore} from "redux";

const recipes = "recipes";

const searchRecipes = "searchRecipes";

export const set_recipes = (data) => (
    {
        type: recipes,
        data,
    }
)

export const set_search_recipes = (search) => (
    {
        type: searchRecipes,
        search,
    }
)

const initialState = {
    getData:  [],
    getSearch: "",
}

const recipesReducer = (state=initialState, action) =>{
    if(action.type === recipes){
        return{
            ...state,
            getData: action.data,
        };
    }
    if(action.type === searchRecipes){
        return{
            ...state,
            getSearch: action.search,
        }
    }
    return state;
}

const Store = createStore(recipesReducer);
export default Store;