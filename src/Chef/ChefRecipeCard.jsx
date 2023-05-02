/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toast from "../Toast/Toast";
import { useState } from "react";

const ChefRecipeCard = ({ recipe }) => {
    const [favouite,setFavourite] = useState(false)
    const { title, ingredients, cookingMethod, rating } = recipe;
    
    const handleFavourite = () => {
        toast.success('Added to favorite', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setFavourite(true)
    }
   
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
                    <p className="font-bold text-md">Ingrdiens :</p>
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
              <button  onClick={handleFavourite} disabled={favouite} className={` disabled:bg-opacity-60 mr-2 flex items-center gap-2 px-6 rounded-md py-1 bg-warning cursor-pointer text-sm absolute bottom-2`} title="favouite"> <span><FaRegHeart/></span> Favorite</button>    
                 <Toast/>
            </div>
        </div>
    );
};

export default ChefRecipeCard;