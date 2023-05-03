import Banner from "../../components/Banner/Banner";
import Chef from "../Chef/Chef";
import FeatureRecipe from "../../components/Feature/FeatureRecipe";
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