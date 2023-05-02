import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>{data.chefName}</h1>
            <img src={data.chefPicture} alt="" />
        </div>
    );
};

export default ChefDetails;