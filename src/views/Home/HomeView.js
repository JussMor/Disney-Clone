import { Container } from "./HomeStyle";
import ImgSlider from "./components/ImgSlider/ImgSlider";
import Viewers from "./components/Viewers/Viewers";
import Recommends from "./components/Recommends/Recommends";
import Header from "../../components/layout/Header/Header";
import NewDisney from "./components/NewDisney/NewDisney";
import Originals from "./components/Original/Original";
import Trending from "./components/Trending/Trending";

const Home = () => {
  return (
    <div>
      <Header/>
      <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
      </Container>
    </div>
  );
};

export default Home;
