/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const ChefCard = ({chef}) => {
    // eslint-disable-next-line react/prop-types
    const {chefName,chefPicture,experience,recipes,likes} = chef;
    return (
        <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure><img src={chefPicture} className="h-[300px] w-full object-cover" alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-serif">{chefName}</h2>
          <p className="font-bold">Experience : {experience}</p>
          <div className="flex flex-col gap-3 justify-between font-serif font-bold text-slate-950">
            <p >Likes : {likes}</p>
            <p>Total Recipes : {recipes.length}</p>
          </div>
          <div className="flex gap-2 text-lg items-center">
           <button className="px-3 py-1 rounded-lg mt-5 bg-amber-300 font-bold text-slate-950">View Recipe</button>
        </div>
      </div>
      </div>
    );
};

export default ChefCard;