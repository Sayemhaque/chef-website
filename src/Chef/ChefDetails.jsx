import { useLoaderData } from "react-router-dom";
import ChefDetailsBanner from "./ChefDetailsBanner";

const ChefDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <ChefDetailsBanner data={data}/>
        </div>
    );
};

export default ChefDetails;