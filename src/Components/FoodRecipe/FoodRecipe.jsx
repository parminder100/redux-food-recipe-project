import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { set_recipes } from "../Store/Store";
import { set_search_recipes } from "../Store/Store";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../FoodRecipe/FoodRecipe.css";

const FoodRecipe = () =>{
    const dispatch = useDispatch();
    const recipesName = useSelector((state)=>state.getData);
    const searchRecipesName = useSelector((state)=>state.getSearch);
    const getFoodRecipe = async() =>{
        const response = await fetch("https://api.spoonacular.com/recipes/random?apiKey=3997f9c843b649139c15926663d1eb84&number=9&tags=vegetarian");
        const data = await response.json();
        console.log(data);
        dispatch(set_recipes(data.recipes));
    }
    useEffect(()=>{
        getFoodRecipe();
    },[])

    const handleSearch = (e) =>{
        dispatch(set_search_recipes(e.target.value));
    }

    const filteredRecipes = recipesName.filter((recipe)=>{
        return recipe.title.toLowerCase().includes(searchRecipesName.toLowerCase());
    })
    return(
        <>
            <div className="container">
                <h1 className="mb-4 text-center">Redux Food Recipe Project</h1>
                <div className="search-recipe mb-5">
                    <input type="text" value={searchRecipesName} onChange={handleSearch} placeholder="Enter the recipe name" />
                </div>
                <OwlCarousel className='owl-theme' loop margin={10} autoplay autoplayTimeout={3000}>
                    {filteredRecipes.map((item)=>(
                        <>
                            <div className="item">
                                <img src={item.image} alt={item.title} />
                                <p className="text-center">{item.title}</p>
                            </div>
                        </>
                    ))}
                </OwlCarousel>
            </div>
        </>
    )
}
export default FoodRecipe;