import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>{data.chefName}</h1>
        </div>
    );
};

export default ChefDetails;