/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ChefRecipeCard = ({ recipe }) => {
   
    const { title, ingredients, cookingMethod, rating } = recipe;
    
   
    return (
        <div className="card relative w-full h-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-3xl">{title}</h2>
                <div>
                    <div className="inline-flex items-center gap-2">
                        <p className="py-1  text-stone-800 font-semibold">{rating}</p>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar className="text-gray-800" />}
                            placeholderSymbol={<FaStar className="text-amber-500" />}
                            fullSymbol={<FaStar />}
                        />
                    </div>
                </div>
                <div>
                    <p className="font-bold text-md mt-3">Ingrdiens :</p>
                </div>
                {ingredients.map((ingredient) => {
                    return (
                        <div key={ingredient.id}>
                            <li className="text-stone-800 font-semibold">{ingredient}</li>
                        </div>
                    )
                })}
                <div>
                    <p className="font-bold text-xl mt-3 ">Cooking Method :</p>
                    
                        <small className="mt-5 w-fit font-semibold text-stone-800">
                            {cookingMethod.slice(0 ,140)}...</small>

                </div>
              <span className="mr-2 cursor-pointer text-xl" title="favouite"><FaRegHeart /></span>    
                 
            </div>
        </div>
    );
};

export default ChefRecipeCard;