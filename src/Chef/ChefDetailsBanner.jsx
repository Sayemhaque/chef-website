/* eslint-disable react/prop-types */

const ChefDetailsBanner = ({data}) => {
    const {chefPicture,chefName,bio,likes,recipes,experience} = data;
    return (
        <div className="min-h-[300px] bg-gray-900 px-16 py-8">
            <div className="flex flex-col justify-around lg:flex-row items-center">
                <img src={chefPicture} className="max-w-lg h-[500px] rounded-lg shadow-2xl object-contain" />
                <div className="max-w-md">
                    <h1 className="text-5xl text-gray-200 font-bold">{chefName}</h1>
                    <p className="py-6 text-gray-300 font-semibold">{bio}</p>
                    <p className="py-1 text-gray-300 font-semibold">Likes : {likes}</p>
                    <p className="py-1 text-gray-300 font-semibold">Total Recipes: {recipes.length}</p>
                    <p className="py-1 text-gray-300 font-semibold mb-3">Experience: {experience}</p>
                    <button className="btn btn-primary">Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default ChefDetailsBanner;