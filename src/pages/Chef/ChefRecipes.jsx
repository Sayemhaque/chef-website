/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import ChefRecipeCard from "./ChefRecipeCard";



const ChefRecipes = ({data}) => {
    const {recipes} = data;
    return (
        <section className="bg-gray-200">
       <h3 className="text-center font-bold text-4xl font-serif uppercase pt-5"><span className="text-amber-500 ">My</span> Recipes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto py-12 gap-10 px-5 lg:px-0">
           {recipes.map(recipe =>  <ChefRecipeCard key={Math.random()}  recipe={recipe}/>)}
        </div>
        </section>
    );
};

export default ChefRecipes;