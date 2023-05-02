import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const FeatureRecipe = () => {
    const [feature,setFeature] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("https://recipe-app-sayemhaque.vercel.app/feature")
        const data = await res.json();
        setFeature(data)
      }
      fetchData()
    },[])
    return (
        <section className="py-12 bg-gray-200 px-5 lg:px-0">
            <h3 className="text-center font-bold text-4xl font-serif uppercase"><span className="text-amber-500">Feature</span> Recipes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mt-8 md:max-w-[1200px] mx-auto">
          {feature.map(recipe => <FeatureCard key={recipe.id} recipe={recipe}/>)}  
        </div>
        </section>
    );
};

export default FeatureRecipe;