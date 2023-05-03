import { Circles } from "react-loader-spinner";

const Loader = () => {
    return (
        <section className="flex justify-center ">
            <Circles
                height="80"
                width="80"
                color="#000000"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </section>
    );
};

export default Loader;