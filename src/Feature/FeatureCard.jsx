import Rating from "react-rating";
import { FaRegStar, FaStar} from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const FeatureCard = ({ recipe }) => {
  // eslint-disable-next-line react/prop-types
  const { name, recipePhoto, description, likes, ratings } = recipe;
  return (
    <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
      <figure><img src={recipePhoto} className="h-[300px] w-full object-cover" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-serif">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <p className="font-bold">Likes : {likes}</p>
        </div>
        <div className="flex gap-2 text-lg items-center">
          <Rating
            placeholderRating={ratings}
            readonly
            emptySymbol={<FaRegStar className="text-gray-800" />}
            placeholderSymbol={<FaStar  className="text-amber-500"/>}
            fullSymbol={<FaStar />}
          />
          <p className="font-bold">{ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;