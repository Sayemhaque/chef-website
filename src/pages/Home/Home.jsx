import Banner from "../../Banner/Banner";
import Chef from "../Chef/Chef";
import FeatureRecipe from "../../Feature/FeatureRecipe";
import Newsletter from "../../Newsletter/Newsletter";

const Home = () => {
    return (
        <main>
           <Banner/>
           <FeatureRecipe/>
           <Chef/>
           <Newsletter/>
        </main>
    );
};

export default Home;