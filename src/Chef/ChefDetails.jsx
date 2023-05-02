import { useLoaderData } from "react-router-dom";
import ChefDetailsBanner from "./ChefDetailsBanner";
import ChefRecipes from "./ChefRecipes";

const ChefDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <ChefDetailsBanner data={data}/>
             <ChefRecipes data={data}/>
        </div>
    );
};

export default ChefDetails;