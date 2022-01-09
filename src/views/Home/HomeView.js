import { Container } from "./HomeStyle";
import ImgSlider from "./components/ImgSlider/ImgSlider";
import Viewers from "./components/Viewers/Viewers";
import Recommends from "./components/Recommends/Recommends";
import Header from "../../components/layout/Header/Header";
import NewDisney from "./components/NewDisney/NewDisney";
import Originals from "./components/Original/Original";
import Trending from "./components/Trending/Trending";
import { useEffect, useRef } from "react";
import db from "../../services/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../stateManage/redux/feature/user/userSlice";
import { setMovies } from "../../stateManage/redux/feature/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
    if (!isMounted.current) {
      isMounted.current = true;
      async function fetchData() {
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.docs.forEach((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;

            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;

            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
            default:
              break;
          }
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trending,
            })
          );
          // console.log(recommends);
        });
      }

      fetchData();
    }
  }, [userName, dispatch]);
  return (
    <div>
      <Header />
      <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
      </Container>
    </div>
  );
};

export default Home;
