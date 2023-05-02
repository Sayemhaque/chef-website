import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import Loader from "../Loader/Loader";

const Chef = () => {
    const [chef, setChef] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch("https://recipe-app-sayemhaque.vercel.app/allchef")
            const data = await res.json();
            setChef(data)
            setLoading(false)
        }
        fetchData()

    }, [])
    console.log(chef)
    return (
        <section className="py-12 bg-gray-100 px-5 lg:px-0">
            <h3 className="text-center font-bold text-4xl font-serif uppercase">Our <span className="text-amber-500">Chef</span></h3>
            {loading ? <Loader /> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mt-8 md:max-w-[1200px] mx-auto">
                    {chef.map(chef => <ChefCard key={chef.id} chef={chef} />)}
                </div>
            }
        </section>
    );
};

export default Chef;