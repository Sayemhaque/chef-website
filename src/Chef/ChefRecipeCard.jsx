/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const ChefRecipeCard = ({ recipe }) => {
    const { title, ingredients, cookingMethod } = recipe;
    console.log(recipe)
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-3xl">{title}</h2>
                <div>
                    <p className="font-bold text-md mt-3">Ingrdiens :</p>
                </div>
                {ingredients.map((ingredient) => {
                    return (
                        <>
                            <li className="text-stone-800 font-semibold">{ingredient}</li>
                        </>
                    )
                })}
                <div>
                    <p className="font-bold text-xl mt-3 ">Cooking Method :</p>
                    <small className="mt-5 font-semibold text-stone-800">
                        {cookingMethod.slice(0,150)}...</small>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipeCard;