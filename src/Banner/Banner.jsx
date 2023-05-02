
const Banner = () => {
    return (
        <div className="bg-gray-900 py-12 md:py-0 px-5 lg:px-0" >
            <div className="flex justify-between items-center flex-col md:flex-row gap-10 text-start  text-neutral-content min-h-screen md:max-w-[1200px] mx-auto lg:px-24">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl text-gray-200  md:text-4xl lg:text-4xl uppercase font-bold ">Embark on a Culinary Journey Through <span className="text-amber-400">Italy</span></h1>
                    <p className="mb-5 text-gray-400 font-bold">Sapori Italiani is your passport to the world of authentic Italian cooking. Our website is dedicated to showcasing the best of Italian cuisine, from classic recipes to modern interpretations. Explore our comprehensive collection of Italian dishes, cooking tips, and cultural insights, and discover the rich and diverse flavors of Italy.</p>
                    <button className="btn btn-warning font-bold text-slate-950">Get Started</button>
                </div>
                <div className="text-start">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;