import { Container, Content, Wrap } from "./RecommendStyle";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../../../stateManage/redux/feature/movie/movieSlice";
import { Link } from "react-router-dom";

const Recommends = (props) => {
  const movies = useSelector(selectRecommend);
  // console.log(movies, ":🛢️");

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
      {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Recommends;
