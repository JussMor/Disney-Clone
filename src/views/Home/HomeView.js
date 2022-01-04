import { Container } from "./HomeStyle";
import ImgSlider from "./components/ImgSlider/ImgSlider";
import Viewers from "./components/Viewers/Viewers";
import Recommends from "./components/Recommends/Recommends";
import Header from "../../components/layout/Header/Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends/>
        
      </Container>
    </div>
  );
};

export default Home;
