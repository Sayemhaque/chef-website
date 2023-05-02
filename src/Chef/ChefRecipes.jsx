/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import ChefRecipeCard from "./ChefRecipeCard";


const ChefRecipes = ({data}) => {
    const {recipes} = data;
    return (
        <section className="bg-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto py-12 gap-10">
           {recipes.map(recipe =>  <ChefRecipeCard  recipe={recipe}/>)}
        </div>
        </section>
    );
};

export default ChefRecipes;